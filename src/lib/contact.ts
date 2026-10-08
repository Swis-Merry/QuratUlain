import { z } from "zod";

export const enquiryTypes = ["Media enquiry", "Speaking invitation", "Business collaboration", "Professional networking"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  organisation: z.string().trim().max(150).optional().default(""),
  type: z.enum(enquiryTypes, { errorMap: () => ({ message: "Please choose an enquiry type." }) }),
  message: z.string().trim().min(20, "Please share a little more detail (at least 20 characters).").max(4000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree to the privacy policy." }) }),
  website: z.string().max(500).optional().default(""),
  startedAt: z.number().int(),
});

export type ContactInput = z.input<typeof contactSchema>;
