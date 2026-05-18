// book-management-front/src/app/libs/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { API_URL } from "@/app/libs/api";

export async function createBook(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  const priceRaw = String(formData.get("price") ?? "").trim();
  const available = formData.get("available") === "on";
  if (!title || !author) throw new Error("Title and author required");

  const res = await fetch(`${API_URL}/api/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      author,
      price: priceRaw ? Number(priceRaw) : null,
      available,
    }),
  });
  if (!res.ok) throw new Error("Create failed");

  revalidatePath("/");
  redirect("/");
}

export async function updateBook(id: number, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  const priceRaw = String(formData.get("price") ?? "").trim();
  const available = formData.get("available") === "on";

  const res = await fetch(`${API_URL}/api/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      author,
      price: priceRaw ? Number(priceRaw) : null,
      available,
    }),
  });
  if (!res.ok) throw new Error("Update failed");

  revalidatePath("/");
  revalidatePath(`/books/${id}`);
  redirect(`/books/${id}`);
}

export async function deleteBook(id: number) {
  const res = await fetch(`${API_URL}/api/books/${id}`, { method: "DELETE" });
  if (res.status !== 204 && !res.ok) throw new Error("Delete failed");

  revalidatePath("/");
  redirect("/");
}
