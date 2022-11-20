import React from 'react';
import { Form } from 'react-router-dom';

export const AddPost = () => {
  return (
    <div className="mx-auto w-full max-w-[550px] pt-5">
      <h1 className="text-3xl font-bold pb-5">Add Post</h1>
      <Form method="post" action="/save_post">
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title of the post"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Body
          </label>
          <textarea
            rows={4}
            name="body"
            id="body"
            placeholder="Type your body here..."
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};
