"use client";

import { useFormStatus } from "react-dom";
import { createBook } from "@/app/libs/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-blue" disabled={pending}>
      {pending ? "등록중..." : "등록하기"}
    </button>
  );
}

export default function RegisterPage() {
  return (
    <>
      <h1>도서 등록</h1>
      <hr />
      <form action={createBook}>
        <table className="form-table data">
          <tbody>
            <tr>
              <td>제목 *</td>
              <td>
                <input type="text" name="title" required style={{ width: "300px" }} />
              </td>
            </tr>
            <tr>
              <td>저자 *</td>
              <td>
                <input type="text" name="author" required style={{ width: "300px" }} />
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td>
                <input type="number" name="price" min={0} /> 원
              </td>
            </tr>
            <tr>
              <td>대여</td>
              <td>
                <label>
                  <input type="checkbox" name="available" defaultChecked /> 대여가능
                </label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <SubmitButton />
                &nbsp;
                <a href="/">취소</a>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
