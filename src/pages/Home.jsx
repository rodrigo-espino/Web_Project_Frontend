import { Layout } from "../components/Layout";
import {
  ClockIcon,
  MusicalNoteIcon,
  GiftIcon
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { API } from "../components/API";
import { toast } from "react-toastify"; 


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const features = [
  {
    name: "Music.",
    description:
      "We play every type of music from rock to hip hop to country and more. We have a wide variety of music to choose from.",
    icon: MusicalNoteIcon,
  },
  {
    name: "Gift.",
    description:
      "We can prepare an especial gift for you or your loved ones. We can prepare a gift for any occasion and for all ages.",
    icon: GiftIcon,
  },
  {
    name: "Deadlines",
    description:
      "We have the compromisse to deliver the best service and the best entertainment for your event.",
    icon: ClockIcon,
  },
];
export function Home() {
  const [session, setSession] = useState(false);
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");

  const getComments = async () => {
  try{
    const res = await axios.get(`${API}/comments`);
    setData(res.data);
  }catch(e){
    toast(e.message, { type: "error" });
  }
  }

  const postComment = async () => {
    
    const data ={
      user: parseInt(Cookies.get("Session_Events")),
      comment: comment
    }
    try{
      axios.post(`${API}/comments`,data )
      getComments()
      setComment("")
    }
    catch(e){
      toast(e.message, { type: "error" });
    }

  }

  useEffect(() => {
    const token = Cookies.get("Session_Events");
    if (token) {
      setSession(true);
    }
    getComments();
  }, []);

  return (
    <>
      <Layout />
      {/* What we do */}
      <div className="overflow-hidden bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Organize faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  The best entertainment
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We organize the best events in town with the best music,
                  services and more. <br />
                  We specialize in corporate events, graduations and weddings.

                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="party.jpeg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      {/* Comments */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {
              data ? (
                data.map((item) => (
                  <blockquote className="rounded-lg bg-gray-100 p-8" key={item.ID}>
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="icon.png"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    {item.NAME}
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                {item.COMMENT}
              </p>
            </blockquote>
              )) ) : null
            }
          </div>
        </div>
      </section>

      {/* Card to let comment */}
      {
        session ? (
          <div className="isolate bg-white py-24 px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Let your comment
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Create a comment to let people know your experience with us
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={postComment}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save Comment
            </button>
          </div>
        </div>
      </div>
        ): null
      }
    </>
  );
}
