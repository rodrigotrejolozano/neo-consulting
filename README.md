# BCP Landing Page - Caso Práctico Front-End React Developer

Este repositorio contiene la implementación de una landing page experimental para el **Banco de Crédito del Perú (BCP)**, diseñada para validar hipótesis de optimización de conversión (CRO) mediante pruebas A/B y medición de eventos con Google Tag Manager (GTM).

---

## 💡 Hipótesis y Objetivo

### Hipótesis

> "Modificar el color y mensaje del banner principal puede aumentar el porcentaje de clics (CTR) hacia el formulario de solicitud."

### Objetivo

Desarrollar una experiencia digital en React que permita:

1.  Desplegar dos variantes del banner principal (**A/B Test**) de forma aleatoria.
2.  Capturar interacciones críticas mediante **Google Tag Manager (GTM)**.
3.  Analizar el comportamiento del usuario para determinar qué variante genera mayor intención de solicitud.

---

## 🛠️ Implementación Técnica

### 1. A/B Testing (Banner Experimental)

Se implementó un sistema de variantes aleatorias persistidas por sesión/usuario utilizando un hook personalizado `useExperiment`.

- **Variante A**: Fondo azul institucional con CTA "Solicita ahora". Enfoque en beneficios directos.
- **Variante B**: Fondo naranja (color de acento) con CTA "Aplica ya". Enfoque en crecimiento y rapidez.

### 2. Estructura de la Landing

- **Header**: Logo BCP y navegación simulada de alto impacto visual.
- **Hero Banner**: Componente dinámico que renderiza la variante asignada.
- **Benefits**: Sección de valor con cards interactivas.
- **Steps**: Sección de valor con pasos interactivos.
- **Formulario**: Validación en tiempo real (React Hook Form + Zod) para recolección de leads.
- **Footer**: Enlaces institucionales y cumplimiento legal simulado.

---

## 📊 Medición con GTM (Tracking)

Se integró una capa de datos (`window.dataLayer`) para registrar eventos clave de forma estructurada:

### Ejemplo de Implementación en Código

A continuación se muestra el fragmento de código donde se dispara el evento de GTM al interactuar con el CTA del banner:

```tsx
// Ubicación: src/components/Banner/Banner.tsx
const handleCTAClick = () => {
  const ctaText = variant === "A" ? "Solicita ahora" : "Aplica ya";

  // Push a dataLayer según el estándar solicitado
  trackClickCTA(experimentId, variant, ctaText);

  onCTAClick(); // Scroll al formulario
};

// Ubicación: src/utils/gtm.ts
export const trackClickCTA = (
  experimentId: string,
  variant: string,
  ctaText: string,
) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "experiment_event",
    experimentId: experimentId,
    action: "click_cta",
    variant: variant,
    label: `CTA clicked - ${ctaText}`,
  });
};
```

---

## 🚀 Despliegue y Repositorio

- **URL de Producción (GitHub Pages):** [https://rodrigotrejolozano.github.io/neo-consulting](https://rodrigotrejolozano.github.io/neo-consulting)
- **Repositorio:** [rodrigotrejolozano/neo-consulting](https://github.com/rodrigotrejolozano/neo-consulting)

---

## ⚙️ Tecnologías Utilizadas

- **React 19** (Vite)
- **TypeScript**.
- **CSS Modules** para estilos granulares y optimizados.
- **React Hook Form + Zod** para gestión de formularios.
- **Embla Carousel** para el carrusel de pasos.
- **GTM DataLayer** para analítica avanzada.

---

## 📂 Estructura de Carpetas

```bash
public/             # Archivos estáticos
├── assets/         # Recursos visuales
src/
├── components/     # Componentes visuales (Banner, Form, Benefits, etc.)
├── hooks/          # Lógica de A/B Testing (useExperiment)
├── utils/          # Utilidades de tracking (GTM) y validación
└── types/          # Definiciones de TypeScript
```

---

_Este proyecto fue desarrollado bajo el caso practico de landing page para BCP._
