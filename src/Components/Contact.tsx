import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconSend, IconArrowRight } from "@tabler/icons-react";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emptyForm: FormFields = { name: "", email: "", phone: "", message: "" };

const StatusChip = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-xl bg-bgColor/40 border border-primaryColor/15 text-textColor text-xs">
    <span className="w-2 h-2 rounded-full bg-primaryColor flex-shrink-0" />
    {label}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState<FormFields>(emptyForm);
  const [formError, setFormError] = useState<FormFields>(emptyForm);
  const [loading, setLoading] = useState(false);

  const btnSize = useMatches({ xsm: "xs", sm: "sm", md: "md", lg: "md" });

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormError((prev) => ({ ...prev, [id]: validateForm(id, value) }));
  };

  const handleSubmit = async () => {
    const newErrors: FormFields = { ...emptyForm };
    let valid = true;

    for (const key in formData) {
      const error = validateForm(key, formData[key as keyof FormFields]);
      if (error) {
        newErrors[key as keyof FormFields] = error;
        valid = false;
      }
    }

    setFormError(newErrors);

    if (!valid) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "portfolio"), formData);
      toast.success("Message sent! I'll get back to you soon.", {
        duration: 4000,
      });
      setFormData(emptyForm);
      setFormError(emptyForm);
    } catch {
      toast.error("Something went wrong. Please try again.", {
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="px-16 mx-20 lg-mx:mx-0 md-mx:px-6 sm-mx:px-3 my-10 mb-28 font-mono"
    >
      <h2 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-center text-white mb-12">
        <span className="text-headingColor">Contact</span>
      </h2>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
        className="
          w-[65%] lg-mx:w-[80%] md-mx:w-full m-auto
          border border-primaryColor/30 rounded-3xl p-10 sm-mx:p-6 xs-mx:p-4
          shadow-[0_0_24px_0_#A78BFA12]
        "
      >
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-delay="200"
          className="mb-8"
        >
          <div className="flex items-center gap-3 text-primaryColor font-semibold text-xl sm-mx:text-xl mb-2">
            <IconSend className="text-primaryColor w-6 h-6" />
            Let's Connect
          </div>
          <p className="text-textColor text-sm leading-relaxed">
            Have a project in mind or just want to say hello? Fill out the form
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <hr className="border-primaryColor/15 mb-8" />

        <div
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="300"
          className="grid grid-cols-2 sm-mx:grid-cols-1 gap-6 mb-6"
        >
          <FloatingInput
            id="name"
            name="Full Name"
            value={formData.name}
            handleChange={handleChange}
            error={formError.name}
          />
          <FloatingInput
            id="phone"
            name="Phone Number"
            value={formData.phone}
            handleChange={handleChange}
            error={formError.phone}
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="400"
          className="mb-6"
        >
          <FloatingInput
            id="email"
            name="Email Address"
            value={formData.email}
            handleChange={handleChange}
            error={formError.email}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="500"
          className="mb-2"
        >
          <FloatingInput
            id="message"
            name="Message"
            value={formData.message}
            handleChange={handleChange}
            error={formError.message}
          />
        </div>

        <hr className="border-primaryColor/15 my-7" />

        <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600">
          <Button
            fullWidth
            onClick={handleSubmit}
            loading={loading}
            rightSection={!loading && <IconArrowRight size={18} />}
            className="!text-bgColor !font-bold"
            variant="filled"
            size={btnSize}
            radius="xl"
            color="#A78BFA"
          >
            Send Message
          </Button>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="700"
          className="flex sm-mx:flex-col gap-3 mt-5"
        >
          <StatusChip label="Usually replies within 24 hrs" />
          <StatusChip label="Open to opportunities" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
