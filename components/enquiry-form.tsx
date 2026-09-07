"use client";

import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function EnquiryForm() {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-border bg-background px-6 py-10 text-center"
        role="status"
      >
        <p className="font-display text-2xl text-foreground">Thank you.</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          We have your note. This form does not send yet — we will wire it up
          when ordering goes live.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor={`${formId}-name`}>Name</Label>
        <Input id={`${formId}-name`} name="name" required autoComplete="name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`${formId}-contact`}>Phone or email</Label>
        <Input
          id={`${formId}-contact`}
          name="contact"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor={`${formId}-area`}>Area (optional)</Label>
        <Input id={`${formId}-area`} name="area" autoComplete="address-level2" />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor={`${formId}-notes`}>What would you like?</Label>
        <Textarea
          id={`${formId}-notes`}
          name="notes"
          placeholder="Meals, dietary notes, how many people…"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg">
          Send enquiry
        </Button>
      </div>
    </form>
  );
}
