import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";

const AddService = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(imageUrl);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      image: imageUrl,
    };
    const res = await fetcher.post("add-service", serviceData);
    console.log(res);
    reset();
    setImageUrl("");
  };

  const handleUploadImage = (event) => {
    setLoading(true);
    const image = event.target.files[0];

    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=60ca0000a46f2efb9b130ddf2fc5e8e2",
        formData
      )
      .then((res) => {
        setImageUrl(res.data.data.display_url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex w-full justify-center items-center h-screen bg-accent">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 className="mx-auto text-3xl font-bold"> Add Service </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Service Name </span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                {...register("serviceName")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Service Charge</span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>
            <div class="form-control">
              <label htmlFor="image" class="btn btn-accent mt-5">
                <span class="label-text">Upload Image</span>
              </label>
              <input
                id="image"
                type="file"
                class="input input-bordered hidden"
                onChange={handleUploadImage}
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="Submit"
                class="btn btn-primary"
                disabled={!imageUrl ? true : false}
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
