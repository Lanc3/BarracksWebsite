import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import VerticalRoadmap from 'src/components/VerticalRoadmap/VerticalRoadmap'
import 'react-vertical-timeline-component/style.min.css'
import AnimatedLogo from 'src/components/AnimatedLogo/AnimatedLogo'
const RoadmapPage = () => {
  const dates = ['Date 1', 'Date 2', 'Date 3', 'Date 4']

  return (
    <div className="relative m-6 space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
      <div className="is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fillRule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>

        <div className="w-[calc(100%-4rem)] rounded border border-slate-200 bg-[#693D97] p-4 shadow md:w-[calc(50%-2.5rem)]">
          <div className="mb-1 flex items-center justify-between space-x-2">
            <div className="font-bold text-slate-900">Version 1</div>
            <time className="font-caveat font-medium text-indigo-500">
              08/06/2023
            </time>
          </div>
          <div className="text-white">
            In this version we will launch and start the website
          </div>
        </div>
      </div>

      <div className="is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fillRule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>

        <div className="w-[calc(100%-4rem)] rounded border border-slate-200 bg-[#693D97] p-4 shadow md:w-[calc(50%-2.5rem)]">
          <div className="mb-1 flex items-center justify-between space-x-2">
            <div className="font-bold text-slate-900">Order Shipped</div>
            <time className="font-caveat font-medium text-indigo-500">
              09/06/2023
            </time>
          </div>
          <div className="text-white">
            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
            morbi blandit cursus risus.
          </div>
        </div>
      </div>

      <div className="is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fillRule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>

        <div className="w-[calc(100%-4rem)] rounded border border-slate-200 bg-[#693D97] p-4 shadow md:w-[calc(50%-2.5rem)]">
          <div className="mb-1 flex items-center justify-between space-x-2">
            <div className="font-bold text-slate-900">In Transit</div>
            <time className="font-caveat font-medium text-indigo-500">
              10/06/2023
            </time>
          </div>
          <div className="text-white">
            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
            morbi blandit cursus risus.
          </div>
        </div>
      </div>

      <div className="is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fillRule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>

        <div className="w-[calc(100%-4rem)] rounded border border-slate-200 bg-[#693D97] p-4 shadow md:w-[calc(50%-2.5rem)]">
          <div className="mb-1 flex items-center justify-between space-x-2">
            <div className="font-bold text-slate-900">Out of Delivery</div>
            <time className="font-caveat font-medium text-indigo-500">
              12/06/2023
            </time>
          </div>
          <div className="text-white">
            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
            morbi blandit cursus risus.
          </div>
        </div>
      </div>

      <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-slate-300 text-slate-500 shadow group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            {' '}
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              fill="white"
            ></path>{' '}
          </svg>
        </div>

        <div className="w-[calc(100%-4rem)] rounded border border-slate-200 bg-[#693D97] p-4 shadow md:w-[calc(50%-2.5rem)]">
          <div className="mb-1 flex items-center justify-between space-x-2">
            <div className="font-bold text-slate-900">Delivered</div>
            <time className="font-caveat font-medium text-amber-500">
              Exp. 12/08/2023
            </time>
          </div>
          <div className="text-white">
            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
            morbi blandit cursus risus.
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapPage
