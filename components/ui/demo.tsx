"use client";

import * as React from "react";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";

export default function AnimatedShaderHeroDemo() {
  const handlePrimaryClick = React.useCallback(() => {
    console.log("Open next unit");
  }, []);

  const handleSecondaryClick = React.useCallback(() => {
    console.log("Open 16-week map");
  }, []);

  return (
    <AnimatedShaderHero
      trustBadge={{
        text: "מסלול חי לשיפוט, ארכיטקטורה והובלת delivery"
      }}
      headline={{
        line1: "לומדים לבנות",
        line2: "מוצר טכני",
        line3: "בלי ללכת לאיבוד בקוד"
      }}
      subtitle="מסלול עבודה חי שמציג רק את הצעד הבא: להבין מערכות, לשפוט קוד, להוביל עבודה עם סוכנים ולשלוח לפרודקשן."
      buttons={{
        primary: {
          text: "לפתוח את היחידה הבאה",
          onClick: handlePrimaryClick
        },
        secondary: {
          text: "לראות את מפת 16 השבועות",
          onClick: handleSecondaryClick
        }
      }}
      stats={[
        { value: "16", label: "שבועות" },
        { value: "14", label: "יחידות" },
        { value: "5", label: "יכולות ליבה" }
      ]}
    />
  );
}
