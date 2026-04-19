import { z } from "zod";

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z.email("Ingresa un correo válido"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
