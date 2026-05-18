"use client";

import { useFormStatus } from "react-dom";
import { updateBook } from "@/app/libs/actions";
import type { Book } from "@/types/book";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-blue" disabled={pending}>
      {pending ? "저장중..." : "저장"}
    </button>
  );
}

export default function BookEditForm({ book }: { book: Book }) {
  const action = updateBook.bind(null, book.id);

  return (
    <form action={action}>
      <table className="form-table data">
        <tbody>
          <tr>
            <td>제목</td>
            <td>
              <input
                type="text"
                name="title"
                defaultValue={book.title}
                required
                style={{ width: "300px" }}
              />
            </td>
          </tr>
          <tr>
            <td>저자</td>
            <td>
              <input
                type="text"
                name="author"
                defaultValue={book.author}
                required
                style={{ width: "300px" }}
              />
            </td>
          </tr>
          <tr>
            <td>가격</td>
            <td>
              <input type="number" name="price" defaultValue={book.price ?? ""} /> 원
            </td>
          </tr>
          <tr>
            <td>대여</td>
            <td>
              <label>
                <input
                  type="checkbox"
                  name="available"
                  defaultChecked={book.available}
                />{" "}
                대여가능
              </label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <SubmitButton />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
