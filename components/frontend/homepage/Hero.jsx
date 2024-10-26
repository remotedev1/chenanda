"use client"; // if using Next.js App Router

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-dvh bg-black">
      <div className="absolute inset-0 overflow-hidden ">
        <motion.img
          src="/images/hero.jpg"
          alt="Hero Image"
          className="h-full w-full object-cover obj"
          initial={{ opacity: 0.5, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          // whileHover={{ scale: 1.03 }}
          // whileTap={{ scale: 0.95 }}
        />
      </div>

      {/* <div className="relative  text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore amazing content and discover what we offer.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-md text-white font-semibold">
          Get Started
        </button>
      </div> */}
      <div className="absolute w-full left-0 -bottom-3 z-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="1920px"
          height="73.06px"
          viewBox="0 0 1920 73.06"
          enableBackground="new 0 0 1920 73.06"
          xmlSpace="preserve"
          className="svg replaced-svg"
        >
          <g>
            <path
              opacity="0.3"
              fill="#E3EEEE"
              d="M1920.037,34.81v-12.35c-0.592,0-1.203,0-1.962-0.036c-5.221-0.211-9.292,0.896-14.049-0.617   c-4.756-1.552-7.7-3.709-15.179-6.119c-7.449-2.41-4.749-2.41-15.846-2.41s-4.516-1.716-17.668,0.886   c-13.133,2.62-18.104,4.117-30.792,0.664c-12.698-3.477-28.32,2.382-28.32,2.382s-17.181,1.523-19.223,1.29   c-2.048-0.219-2.722,2.207-3.88,0.444c-1.091-1.734-8.356-3.479-7.902-4.356c0.441-0.867-2.954,3.509-3.629,0.443   c-0.686-3.063-2.932-4.983-4.072-6.292c-1.13-1.32-4.509-2.612-7.229-1.55c-2.722,1.107-3.867,8.499-6.116,5.676   c-2.277-2.816-9.292-5.879-10.652-6.119c-1.371-0.204-2.723,3.922-4.536,3.922c-1.795,0-5.201-1.313-6.793-0.62   c-1.584,0.62-4.979,4.339-7.016,2.816c-2.034-1.513-4.757-1.109-6.996-2.816c-2.306-1.753-12.931-2.409-12.931-2.409   s-3.852-1.3-5.422-3.073c-1.603-1.753-6.131,0-11.107-0.193c-4.98-0.23-10.191,1.753-14.022,0.193   c-3.869-1.494-3.656-1.494-9.756-2.16c-6.116-0.654-4.756-1.31-9.736-0.654c-4.988,0.654-3.608,3.69-9.051,1.964   c-5.425-1.753-10.652-1.087-13.588,0c-2.962,1.089-1.137-0.904-12.013,3.269c-10.863,4.126-12.438,5.666-20.157,2.804   c-7.69-2.804-15.631,0.666-18.346,0.259c-2.721-0.453-4.284,3.673-6.116,2.16c-1.795-1.54-3.821,0.857-6.331,0.213   c-2.499-0.666-8.145,1.087-8.83-1.069c-0.665-2.189-1.563-1.303-2.711-1.756c-1.146-0.434-2.507,2.159-3.851,2.612   c-1.37,0.443-2.731-1.31-2.941-3.046c-0.215-1.743-2.25,1.506-3.61,1.736c-1.369,0.213-2.73,2.61-3.86,1.31   c-1.139-1.31-3.609-2.419-4.757-2.853c-1.13-0.404-4.295,2.853-5.227,2.399c-0.89-0.403,0.47,1.523-6.99-0.856   c-7.487-2.399-12.235-3.056-14.733-3.479c-2.473-0.434-7.229,0.876-9.284,0.636c-2.018-0.213-2.276,1.541-7.034,3.506   c-4.739,1.947-15.372,4.319-16.046,4.559c-0.679,0.213-12.441,1.753-14.942,1.533c-2.506-0.223-12.232,5.463-12.232,5.463   l-7.728,3.026c0,0-13.338,0.443-15.616,0c-2.256-0.423,1.611,0-14.938-7.861c-16.529-7.826-23.1-4.56-23.786-4.32   c-0.675,0.204-21.063,8.693-23.988,7.846c-2.925-0.906-7.46,4.529-13.811,5.426c-6.358,0.857-26.497,0-26.497,0   s-20.833-2.196-23.322-3.912c-2.481-1.773-4.055-2.197-4.508-2.826c-0.473-0.681-1.147-3.709-4.082-4.806   c-2.963-1.1-7.727-1.966-8.404-2.41c-0.674-0.414-1.57-3.682-5.652-3.489c-4.074,0.259-7.932,0.666-9.969,0.879   c-2.037,0.23-3.388-0.417-4.295-2.613c-0.888-2.159-3.832,0.684-5.646-0.867c-1.822-1.513-7.939,1.55-9.088,0.867   c-1.101-0.636-0.195-3.682-0.195-3.682l-4.08-0.656h-3.87l-2.258-3.267l-2.702,3.065L1224.256,0l-5.202,0.894   c0,0-2.962,0.629-4.534,0.204c-1.574-0.443-3.86-1.293-6.127-0.877c-2.249,0.434-3.147,1.976-7.219,3.922   c-4.064,1.984-12.698,5.906-16.318,7.419c-3.619,1.504-9.496,6.938-14.503,4.319c-4.96-2.603-9.503-2.815-11.531-1.716   c-2.046,1.1-9.272,4.336-10.208,3.489c-0.89-0.869-0.204-2.189-1.094-2.39c-0.934-0.232-5.902,3.68-6.58,3.92   c-0.676,0.203-4.081-1.31-3.869-1.753c0.242-0.443-1.573,0.85-4.294,1.302c-2.73,0.451-8.821-1.08-13.123-1.302   c-4.312-0.221-8.376-0.443-13.143-1.097c-4.766-0.646-10.625,0.876-11.985,0.248c-1.36-0.701-10.877-1.993-11.348-3.073   c-0.445-1.087-2.277-2.157-5.876-2.84c-3.62-0.62-6.331,1.3-7.923,2.397c-1.584,1.099-6.58,4.809-14.503,5.878   c-7.925,1.109-5.211,6.535-15.616,2.179c-10.41-4.338-10.41-13.067-14.502-4.338c-4.061,8.695-6.098,6.092-15.824,8.935   c-6.821,1.956-21.094,5.646-32.117,7.842c-2.099,0.407-4.117,0.776-5.857,1.043c-0.232,0.03-0.417,0.047-0.62,0.076   c-1.629,0.267-3.063,0.471-4.285,0.543c-0.298,0.027-0.593,0.055-0.843,0.055c-9.061,0.463-26.035,5.889-28.301,8.509   c-2.27,2.604-9.071,9.791-14.504,6.312c-5.443-3.469-6.322-7.382-9.034-1.964c-2.721,5.443-2.056,9.146-8.172,8.499   c-6.1-0.656-12.458,0.857-15.616,0.444c-3.172-0.444-8.837,0.625-12.013-0.888c-3.146-1.513-2.711,1.09-8.838-1.099   c-6.1-2.167-10.615-2.167-16.047-4.326c-5.442-2.217-14.957-3.276-19.27-3.084c-4.285,0.261-8.831-3.045-8.831-3.045   s-9.052,1.55-12.217,1.099c-3.156-0.416-9.272,1.098-13.809-1.513c-4.535-2.612-7.924,0.414-13.586,0.654   c-5.655,0.212-5.886,1.31-10.412-2.844c-4.536-4.151-7.711-1.937-11.782-2.842c-4.071-0.837-3.629,3.075-11.311,1.533   c-7.718-1.533-9.764-1.091-15.873-1.728c-6.117-0.643-9.948-1.52-18.344-2.399c-8.366-0.856-13.584-0.229-21.055-0.856   c-7.46-0.664-10.883,1.503-14.69-3.266c-3.867-4.818-9.523-2.196-17.455,0c-7.949,2.16-11.328,1.29-12.224,1.29   c-0.898,0-6.804,1.312-9.054,0.656c-2.286-0.656-10.438-0.859-12.216-1.1c-1.832-0.203-9.977,3.047-10.883,2.853   c-0.906-0.229-8.152,0-12.688-1.753c-4.536-1.753-10.395-3.267-13.125-4.366c-2.721-1.09-4.534-3.719-7.023-3.249   c-2.49,0.426-3.406,2.392-7.701-0.664c-4.295-3.026-0.204-4.336-9.96-4.596c-9.744-0.184-17.204,2.419-20.139,3.276   c-2.971,0.896-1.601,2.833-6.578,0.213c-4.971-2.612-9.302,0.24-9.302,0.24s-14.263,2.169-16.736,1.309   c-2.487-0.866-14.039-0.866-20.85-2.86c-6.785-1.919-12.681-0.609-21.509-4.116c-8.84-3.489-13.596,0.645-21.501-1.513   c-7.939-2.216-12.227,0.403-18.334-2.632c-6.107-3.043-7.932-0.876-12.688-1.504c-4.74-0.683-7.941,2.621-15.846,2.16   c-7.932-0.433-9.069,1.089-9.069,1.089s-6.561-0.426-9.94,0c-3.407,0.443-6.582-3.25-10.201-2.179   c-3.644,1.089-7.46,2.179-9.283,4.152c-1.832,1.939-2.035-1.53-13.383,0.629c-11.301,2.196-0.204,0-20.813,3.912   c-20.613,3.931-28.091,5.923-39.178,3.931c-11.089-1.937-42.565,1.309-57.282-1.937c-14.725-3.295-20.157-2.189-31.495-3.913   c-11.301-1.753-15.382,0.847-24.878-2.197c-9.524-3.028-11.551,0.645-16.772-0.666c-5.211-1.291-12.226,1.109-14.947-0.847   c-2.722-1.976-5.21-1.976-7.265-3.065c-2.036-1.071-6.109,0.433-8.145-0.203c-2.045-0.664-7.006,2.159-9.515,1.753   c-2.471-0.46-9.263-2.194-11.55-3.073c-2.259-0.857-5.173,0.452-7.22,3.276c-2.045,2.825-13.828-1.956-13.828-1.956   s-3.619-4.78-6.552-5.473c-2.971-0.617-7.266,2.613-9.283,2.613c-2.045,0-5.239,0.896-9.736-0.213   c-4.534-1.087-5.895,1.523-11.116,0c-5.201-1.503-11.551,3.509-15.845,2.632c-4.294-0.879,7.479,2.194-15.845,3.894   C13.383,18.98,6.09,19.627,0,19.987v34.321c5.054,0.416,9.153,0.923,10.772,1.429c5.434,1.754,12.689,5.233,19.011,4.365   c4.915-0.662,9.885,1.294,11.828,2.207c0.556,0.25,0.861,0.414,0.861,0.414l3.25-1.051l2.193-0.702c0,0,3.62-0.868,6.331,0   c0.471,0.156,0.906,0.343,1.268,0.525c1.795,0.841,2.804,1.634,5.063-0.525c0.601-0.57,0.972-1.18,1.286-1.754   c1.018-2.01,1.018-3.506,5.673-1.014c0.075,0.055,0.177,0.1,0.306,0.165c3.36,1.846,4.424,0.738,5.062-0.812   c0.622-1.393,0.908-3.139,2.194-3.525c2.702-0.902,0.897,3.46,6.313,2.603c5.441-0.896,3.618-0.896,9.051-0.896   c5.432,0,32.606-3.459,32.606-3.459l11.578,4.336l4.73,1.754l1.193-4.005l0.621-2.085c5.442,1.753,9.061,0.851,9.061,0.851h6.35   c3.516,0.59,6.636,1.862,8.403,2.729c0.982,0.427,1.537,0.776,1.537,0.776s4.553-1.753,6.357-3.505   c0.473-0.437,1.02-1.007,1.584-1.59c1.665-1.54,3.655-2.953,5.654-1.014c0.287,0.258,0.49,0.543,0.648,0.811   c0.066,0.112,0.112,0.203,0.148,0.279c0.148,0.293,0.221,0.57,0.268,0.847c0.268,1.663-1.026,2.593,1.657,0.667   c3.627-2.604-0.908,5.239,3.627-2.604c1.481-2.549,2.463-4.247,3.102-5.409c1.425-2.436,1.425-2.436,1.425-2.436l13.586,4.355   l6.358,4.375c0,0,0.297,0.073,0.75,0.204c1.232,0.293,3.702,0.71,4.952-0.26c0.277-0.184,0.5-0.461,0.62-0.83   c0.277-0.83,0.935-1.126,1.693-1.163c1.638-0.073,3.74,1.163,3.74,1.163s1.277-1.993,3.184-3.426   c1.657-1.28,3.775-2.149,5.877-0.913c1.582,0.913,3.183,1.717,4.664,2.196c2.5,0.793,4.683,0.646,5.896-1.587   c0.111-0.184,0.214-0.405,0.297-0.609c1.092-2.64,3.183-1.477,5.275-0.498c1.36,0.627,2.711,1.164,3.813,0.498   c1.055-0.684,1.702-1.513,2.303-2.203c0.982-1.074,1.815-1.819,4.027-1.303c3.609,0.886,7.256-0.857,9.967-0.857   c0.325,0,0.685-0.029,1.056-0.094c0.054,0,0.083,0,0.137-0.009c0.63-0.11,1.277-0.24,1.945-0.313   c2.489-0.536,5.552-1.34,8.634-1.34c4.536,0,15.401,1.756,28.986,6.119c7.423,2.346,9.97,4.235,11.922,4.854   c1.667,0.518,2.878,0.185,6.164-1.386c0.555-0.256,1.12-0.496,1.685-0.643c7.016-2.474,15.743-0.223,18.287-0.223   c2.704,0,6.324,0,6.324,0l4.526-0.887c0,0,9.051-0.222,9.736-0.414c0.408-0.12,2.38-0.287,3.877-0.36   c0.982-0.066,1.778-0.093,1.778-0.093s0.813,0.94,1.321,1.209v0.037c0.28,0.121,0.481,0.064,0.481-0.379   c0-1.291,2.5,1.312,2.055-0.867c-0.461-2.159,1.13-3.249,2.49-0.85c0.177,0.276,0.307,0.516,0.407,0.757   c0.953,1.735,1.056,2.085,1.842,0.738c0.415-0.662,0.722-0.959,1.176-1.143c0.564-0.224,1.397-0.333,2.915-0.804   c2.703-0.858,5.645,0.451,5.645,0.451l2.722,1.717c0,0,2.276,1.976,3.389,1.532c1.156-0.423,1.36-1.754,3.644-1.301   c1.25,0.248,2.583,0.894,3.666,1.337c0.87,0.36,1.584,0.61,1.973,0.407c0.832-0.407,1.664,1.919,3.007-0.333   c0.131-0.203,0.258-0.461,0.416-0.756c1.557-3.508,4.526,0.223,6.099-0.241c1.582-0.414,7.267-1.291,7.267-1.291   s2.303-0.314,4.57-0.646c1.935-0.27,3.824-0.554,4.258-0.666c0.23-0.054,0.658-0.211,1.25-0.387   c1.434-0.536,3.666-1.272,5.294-1.127c2.286,0.204,2.025,0,8.386,2.18c6.34,2.178,13.354,1.734,14.483,1.522   c1.139-0.231,24.694,0.414,34.652-1.099c5.792-0.887,7.821-1.236,8.737-1.402c0.695-0.111,0.739-0.111,1.23-0.111   c1.11,0,2.721,1.514,4.304-0.886c0.231-0.35,0.462-0.701,0.695-1.043c1.361-1.909,2.731-3.387,4.052-2.631   c1.574,0.86,0.899,2.373,3.398,1.504c2.507-0.856,8.143,3.479,9.523,3.72c0.943,0.156,1,1.56,3.119,1.717   c0.926,0.112,2.193-0.037,4.128-0.646c1.712-0.535,3.128-1.015,4.322-1.438c3.203-1.044,4.914-1.532,7.229-0.73   c3.146,1.098,6.783,1.947,9.523,2.593c1.583,0.407,3.646,1.533,5.775,2.014c1.481,0.33,2.989,0.33,4.406-0.48   c1.287-0.759,2.276-1.156,3.165-1.422c1.424-0.387,2.638-0.424,4.739-0.96c3.387-0.887,5.432,3.046,13.354,3.933   c7.942,0.85,18.558-0.463,27.636,3.672c2.519,1.144,4.545,2.177,6.21,3.01c4.314,2.083,5.886,2.692,5.572-0.167   c-0.194-1.699,0.427-2.362,1.323-2.659c1.147-0.424,2.685-0.203,3.212-0.848c0.906-1.052,6.321,0.664,6.321,0.664   s2.714,0,3.406,1.54c0.667,1.514-0.221-1.097,2.029-0.886c1.444,0.13,2.764,1.93,3.553,2.722c0.455,0.489,0.739,0.628,0.739-0.11   c0-1.966,4.081-0.423,3.389-0.212c-0.344,0.12,0.12,0.065,0.692-0.258c0-0.026,0-0.026,0-0.026c0.501-0.232,1.177-0.729,1.361-1.47   c0.407-1.319,3.258-1.483,3.766-1.06c0.03,0.055,0.067,0.09,0.093,0.156c0,0.027,0,0.027,0,0.047   c-0.23,0.646,1.574,3.275,1.574,3.275s1.814-1.752,2.49-2.419c0.685-0.646,3.868,3.507,4.767,3.066   c0.377-0.177,2.303-0.501,4.452-0.813c0.027,0,0.063,0,0.063-0.026c0.612-0.112,1.27-0.196,1.879-0.307   c2.146-0.377,4.082-0.736,4.258-1.023c0.425-0.656,2.721,0.424,4.98,1.069c2.249,0.665,2.249,1.101,7.922,0.665   c5.662-0.441,7.912,0.223,16.307,1.302c8.367,1.08-6.591,4.576,24.21,3.257c30.813-1.29,26.73,0,33.515,1.956   c3.821,1.116,7.053,2.898,9.597,3.875c2.038,0.777,3.592,1.018,4.703,0.058c0.017-0.058,0.056-0.058,0.092-0.11   c2.089-1.662,5.82-0.5,8.802-0.047h0.063c0.584,0.1,1.15,0.157,1.658,0.157c1.119,0,2.553,0.376,3.96,0.866   c2.416,0.831,4.646,1.986,4.646,1.986s0.341,0.193,0.888,0.534c0.313,0.182,0.682,0.394,1.07,0.608h3.95   c0.192-0.205,0.419-0.4,0.689-0.572c0.835-0.57,2.019-0.913,2.907-0.803c1.444,0.192,3.443,0.02,3.767,0.83   c0.064,0.083,0.093,0.148,0.093,0.259c0,0.085,0.039,0.183,0.096,0.286h56.324c0.319-0.096,0.635-0.209,0.924-0.359   c0.445-0.276,0.869-0.59,1.073-1.016c0.094-0.184,0.25-0.351,0.418-0.518c0.943-0.829,2.951-1.383,4.526-1.846   c0.953-0.22,1.758-0.48,2.072-0.681c0.418-0.306,1.324,0.11,2.25,0.644c1.065,0.61,2.146,1.423,2.5,1.533   c0.378,0.11,2.24-0.736,3.905-1.569c0.795-0.407,1.557-0.794,2.102-1.069c0.352-0.214,0.629-0.342,0.787-0.414   c0.36-0.177,0.936,0.034,1.601,0.377c0.675,0.313,1.481,0.766,2.23,1.052c0.39,0.167,0.788,0.257,1.149,0.313   c1.25,0.12,2.574,1.088,4.155,1.754c0.742,0.313,1.537,0.572,2.416,0.656c0.916,0.063,1.12-0.27,1.331-0.637   c0.438-0.686,0.955-1.479,6.628,0c0.185,0.054,0.425,0.137,0.658,0.193c1.925,0.507,3.534,0.978,4.86,1.356   c0.279,0.08,0.541,0.155,0.798,0.229h13.708c0.176-0.057,0.351-0.113,0.542-0.176c0,0,0,0,0.037,0   c0.268-0.11,0.565-0.221,0.869-0.323c1.167-0.377,2.075-0.804,2.962-1.207c2.954-1.238,5.869-2.289,17.892-2.289   c6.913,0,11.57,1.402,16.234,2.437c4.544,0.95,9.096,1.569,15.787,0.037c1.908-0.424,3.943-1.033,6.221-1.819   c1.25-0.451,2.479-0.878,3.664-1.265c1.251-0.387,2.453-0.756,3.619-1.052c14.021-4.06,22.454-3.56,31.229-2.271   c10.188,1.551,18.547-3.246,24.238-5.858c5.653-2.62,9.737-3.497,9.737-3.497s6.097,0.877,7.236,0.45c1.13-0.45,2.721,0,5.655-0.24   c2.925-0.21,8.849-0.21,18.141-5.212c9.255-5.003,24.877-3.913,25.535-3.913c0.692,0,12.041-1.735,12.041-1.735   s7.46,3.258,9.282,3.47c1.798,0.202,2.721-1.311,2.473-3.064c-0.214-1.716,0.665-3.016,1.36-2.602   c0.685,0.442,1.341,4.355,3.406,3.71c2.025-0.655,7.236,1.744,8.384,0c1.102-1.754,4.979,0.442,6.118,0.646   c1.11,0.222,9.504,1.977,12.893-0.85c3.396-2.851,9.052,0.204,11.772-1.55c2.729-1.728,3.636,15.68,8.375,4.376   c4.748-11.315,6.358-6.746,10.652-6.104c4.296,0.657,9.053,0.657,10.413,0.427c1.343-0.213,6.109-3.702,9.957-4.145   c3.86-0.433,10.416-0.644,14.485-1.078c4.073-0.416,31.471,0.241,39.401,1.078c7.94,0.876,12.902,1.976,12.902,1.976   s-2.241,8.712,0.462,6.515c2.721-2.159,11.348-5.858,11.551-6.957c-0.02,0.553,0.248,2.085,2.722,2.398   c3.616,0.443,9.262,0.213,15.169,0.443c5.895,0.221,9.727-0.657,11.551-1.1c1.814-0.434,14.723-3.708,23.554-3.919   c8.818-0.193,40.074,2.177,41.648,2.177c1.417,0,2.61,1.146,2.915,1.459c-0.168-0.261-0.685-1.459,2.092-2.779   c3.139-1.522,6.109,0.229,6.109,0.229s0.906,2.189,2.249,0.434c1.368-1.713,6.803-0.434,7.698-1.07   c0.936-0.643,5.896,1.304,5.896,1.304s2.035-1.304,5.656-0.443c3.646,0.867,0.239,2.823,7.941,1.753   c7.68-1.106,9.727-8.065,19.693-8.731c9.968-0.645,24.898,5.908,26.028,3.49c1.118-2.334,5.431-3.434,8.55-3.887   c-0.906,0.232-1.267,0.573,7.32,0.186c14.255-0.637,21.732,1.753,24.196-0.193c2.515-1.986,5.448-4.172,7.476-3.509   c2.036,0.647,6.803,3.066,7.479,3.703c0.686,0.653,3.406,0,5.22,0.211c1.822,0.24,2.926-1.514,4.072-1.318   c1.148,0.247,7.479,3.516,7.479,3.516s8.828,2.167,11.077,2.167c2.286,0,12.479-2.369,15.189-2.167   c2.71,0.201,8.366,0.868,10.19,0.664c1.795-0.25,8.597,0.628,11.087,1.29c2.497,0.666,3.617,2.373,6.108,0.213   c2.498-2.167,4.534-1.753,5.895-3.275c1.361-1.494,3.638-1.3,5.201-0.85c1.61,0.443,3.389,0.646,4.989-0.867   c1.583-1.55,4.757-2.843,6.813-1.31c2.026,1.533,1.574,14.377,4.736,8.915c3.166-5.436,11.302-3.488,13.357-4.982   c2.034-1.553,2.489,3.007,4.535,1.07c2.025-1.977,9.717,0.229,10.863,0.652c1.14,0.434,4.536,2.189,7.942,3.26   c3.398,1.105,32.134,10.445,56.374,6.329c24.213-4.153,26.488-1.098,28.294-1.098c1.824,0,10.188,1.302,13.132,1.744   c2.954,0.425,15.393-3.924,19.473-2.196c4.083,1.754,9.283,2.196,9.283,2.196s10.663,0.656,14.272-0.203   c3.619-0.895,15.847,3.249,15.847,3.249s4.061-0.443,6.117,0c2.035,0.424,7.042,4.346,9.746,6.312   c2.721,1.966,6.33,4.126,6.551,3.506c0.231-0.672,8.841-7.418,13.152-8.931c4.285-1.523,6.118-6.979,12.671-6.333   c6.572,0.656,6.572,10.659,9.504,5.87c2.961-4.78,4.313-1.061,7.461-3.47c3.201-2.4,4.997-3.924,10.873-1.098   c5.916,2.813,6.805,8.296,10.432,5.03c1.66-1.5,2.501-2.301,3.295-2.703V34.81H1920.037z"
            />
            <path
              opacity="0.5"
              fill="#F5FAF9"
              d="M1907.968,34.071c-2.608-0.407-4.793-0.831-6.625-1.22   c-6.989-1.486-9.091-2.573-12.052-1.043c-2.352,1.22-7.128-0.257-11.105-2.196c-2.333-1.126-4.388-2.399-5.545-3.376   c-3.082-2.603-9.154-1.293-14.262,0.35c-2.176,0.72-6.933,0.72-12.476,0.574c-2.185-0.02-4.489-0.113-6.795-0.186   c-0.026,0-0.026,0-0.026,0c-5.591-0.167-11.319-0.331-15.705-0.091c-2.141,0.157-4.072,0.22-5.87,0.303   c-6.571,0.304-11.171,0.471-17.01,1.856c-0.603,0.127-1.25,0.277-1.908,0.47c-8.468,2.296-15.259,2.612-17.98,4.252   c-2.723,1.626,0,0-3.083-0.646c-0.834-0.184-2.073-0.644-3.527-1.291c-0.546-0.229-1.081-0.489-1.646-0.776   c-0.381-0.167-0.742-0.35-1.119-0.526h-0.029c-0.205-0.101-0.389-0.184-0.575-0.284c-2.821-1.367-5.321-2.696-5.321-2.696   s-5.441,0-7.792-0.313c-1.5-0.193-2.343,0.997-3.757,1.606c-0.732,0.293-1.594,0.46-2.835,0.146   c-0.183-0.02-0.377-0.083-0.563-0.13c-4.081-1.31-1.351-5.223-1.351-5.223s-7.154-4.899-13.235-3.933   c-6.154,1.007-7.516-0.313-7.83,1.007c-0.323,1.302-7.828-3.616-13.577-4.273c-5.766-0.646-7.83,6.886-9.191,7.198   c-1.359,0.333-19.019-4.899-25.459-6.848c-6.435-1.956-43.834-10.148-50.961-8.489c-7.115,1.606-23.416,5.213-27.849,7.825   s-15.622,1.976-16.651,4.246c-0.998,2.287-6.09-1.31-7.441-0.979c-1.36,0.313-6.792-2.296-8.496-0.987   c-1.729,1.3-6.812-1.309-9.172,1.653c-1.017,1.253-2.34,1.253-3.684,0.92c-0.101-0.017-0.213-0.017-0.287-0.073   c-1.701-0.407-3.423-1.254-4.522-0.534c-2.049,1.3-5.797-4.246-9.176-0.313c-3.433,3.912-4.061-0.997-5.106-1.653   c-1.019-0.646-7.813-1.966-10.532-0.303c-1.333,0.81-4.064,1.281-6.766,1.55c-2.751,0.314-5.452,0.407-6.471,0.407   c-1.036,0-0.926-0.5-1.508-1.653c-0.435-0.886-1.323-2.169-3.479-3.866c-0.527-0.453-1.13-0.886-1.798-1.357   c-7.144-4.882-16.659-1.302-17.665,0c-1.02,1.301-10.526,2.943-15.957,4.919c-4.887,1.77-16.688,5.112-34.348,10.298   c-1.961,0.57-3.997,1.143-6.09,1.763c-2.414,0.71-4.545,1.3-6.404,1.78c-14.466,3.765-14.162,1.07-20.76-2.096   c-0.415-0.193-0.813-0.397-1.176-0.543c-6.432-2.973-7.691-2.353-14.096-1.42c-4.109,0.59-7.959-1.792-11.727-3.673   c-2.453-1.283-4.876-2.326-7.293-2.196c-5.523,0.293-6.338,1.643-12.595,4.963c-0.705,0.389-1.483,0.786-2.343,1.219   c-0.859,0.434-1.648,0.793-2.343,1.09c-3.674,1.521-5.709,1.521-7.865,1.346c-1.628-0.146-3.285-0.386-5.785-0.139   c-6.469,0.666-29.568,0.666-36.354,0.97c-6.304,0.333-15.217-3.017-22.972-7.928c-0.629-0.397-1.214-0.784-1.806-1.207   c-8.163-5.539-5.776-3.266-9.514-4.226c-3.749-1.006-9.172-3.619-11.902-5.565c-2.721-1.966-8.801,1.947-11.199,2.297   c-2.387,0.313-5.432,0-10.542,2.925c-5.082,2.954-4.082-4.245-10.171-6.532c-6.118-2.27-12.568-3.942-17.659-0.97   c-5.101,2.926-12.217,3.58-20.37,8.148c-7.646,4.292-10.819,4.292-16.789,5.066c-0.37,0.064-0.798,0.111-1.223,0.167   c-3.794,0.544-7.366,1.92-11.098,3.442c0,0,0,0-0.026,0c-2.924,1.254-5.97,2.593-9.266,3.727   c-7.47,2.622-10.863,0.656-16.982-0.313c-3.286-0.507-6.479-1.9-9.431-3.126c-2.499-1.026-4.822-1.93-6.858-2.086   c-2.944-0.24-6.304-0.6-9.652-0.111c-1.685,0.201-3.379,0.646-4.961,1.42c-4.435,2.113-7.998-0.036-12.922,0.24   c-0.333,0-0.648,0.02-1,0.057c-2.655,0.331-5.257-0.666-7.673-1.625c-2.518-1.007-4.895-1.937-6.95-1.291   c-4.071,1.311-11.865,3.913-14.596,5.232c-2.711,1.291-12.217,2.26-20.369,3.276c-8.146,0.95-9.154-2.316-10.208-2.316   c-1.019,0-2.379,1.65-2.379,1.65s0,0-3.046,2.263c-3.045,2.297-3.045-0.953-8.479-1.947c-5.433-0.97-16.296,1.3-16.296,1.3   s-18.364,2.612-24.814,1.31c-0.225-0.054-0.418-0.054-0.621-0.1c-0.121-0.03-0.195-0.03-0.286-0.03   c-1.814-0.21-3.441,0.076-4.905,0.619c-0.428,0.168-0.88,0.334-1.277,0.564c-2.888,1.456-5.193,3.923-7.183,5.822   c-3.396,3.267-7.468-1.661-9.172,4.576c-1.611,5.868-16.371,7.328-38.512,13.631c-1.176,0.35-2.377,0.683-3.617,1.042   c-3.98,1.21-6.878,1.993-8.968,2.511c-8.229,2.068-3.693-0.257-3.121-0.728c0.093-0.083,0.093-0.083-0.165-0.01   c-0.141,0.01-0.354,0.091-0.622,0.193c-4.432,1.643-8.162,0-15.298,0.341c-6.033,0.269-3.841-0.387-4.83-1.394   c-0.187-0.174-0.464-0.359-0.963-0.563c-0.527-0.24-1.186-0.406-1.954-0.518c-3.47-0.607-8.848-0.257-13.31-0.803   c-3.016-0.36-6.385-0.73-9.57-0.94c-2.563-0.119-4.978-0.177-7.06-0.037c-1.945,0.138-5.525-0.813-9.302-1.909   c-5.461-1.606-11.311-3.583-13.163-2.973c-3.015,0.96-4.376-0.997-9.817-1.31c-4.175-0.26-11.173-0.51-18.503,0   c-2.212,0.129-4.432,0.333-6.635,0.646c-3.018,0.406-5.702,1.181-8.229,2.04c-2.176,0.727-4.238,1.514-6.395,2.204   c-3.231,1.016-6.561,1.772-10.515,1.633c-2.507-0.084-5.154-0.756-7.818-1.724c-2.898-1.043-5.813-2.466-8.571-3.868   c-2.333-1.19-4.499-2.4-6.488-3.424c-1.714-0.886-3.285-1.613-4.611-2.094c-6.468-2.289-19.741-3.258-29.893-4.918   c-10.228-1.606-9.867-1.939-19.019-0.95c-9.191,0.95-10.22-1.653-12.588-1.304c-2.353,0.314-11.217-1.966-16.651,0   c-1.731,0.621-4.091,0.573-6.635,0.261c-5.351-0.638-11.615-2.465-15.105-1.59c-2.443,0.647-4.248,1.35-6.043,2.033   c-1.917,0.773-3.85,1.53-6.507,2.213c-0.787,0.213-2.424,0.056-4.627-0.313c-6.839-1.183-19.316-4.669-30.163-7.621h-0.029   c-8.413-2.307-15.844-4.246-18.842-4.486c-8.156-0.656-10.516,2.306-12.922,3.618c-0.184,0.102-0.371,0.201-0.564,0.295   c-2.146,0.997-4.323,0.875-13.347-0.637c-7.293-1.19-11.625-0.25-13.928,0.543c-0.816,0.324-1.371,0.583-1.722,0.759   c-1.351,0.664-15.937,2.96-22.064,3.268c-3.914,0.22-6.441-1.304-10.599-3.481c-0.017-0.01-0.044-0.035-0.083-0.01   c-2.304-1.208-5.155-2.619-9.013-4.005c-8.211-2.953-12.941-4.446-17.688-5.276c-1.527-0.27-3.082-0.446-4.739-0.603   c-3.009-0.304-7.625-1.281-12.495-2.204c-1.741-0.305-3.479-0.609-5.218-0.876c-2.63-0.397-5.184-0.676-7.45-0.729   c-1.494-0.093-2.881,0-4.028,0.203c-7.479,1.31-11.885,0.997-15.318,1.643c-0.185,0.027-0.398,0.074-0.639,0.138   c-3.924,0.683-13.54,1.873-18.02,2.779c-4.101,0.876-6.95,5.37-9.375,7.622c-0.378,0.371-0.758,0.647-1.147,0.887   c-1.139,0.7-2.259,0.054-3.556-1.183c-1.795-1.613-3.998-4.299-7.3-6.016c-5.795-2.916-17.347-0.313-21.094,0.35   c-1.638,0.297-4.793,2.013-8.57,4.236c-2.212,1.283-4.701,2.712-7.183,4.153c-2.841,1.616-5.709,3.165-8.356,4.346   c-1.267,0.546-2.554,0.85-3.787,0.95c-3.821,0.343-7.533-1.097-11.06-2.556c-1.999-0.838-3.951-1.698-5.83-2.168   c-1.167-0.343-2.333-0.525-3.433-0.473c-3.473,0.166-9.987-0.699-16.615-1.613c-0.923-0.14-1.841-0.267-2.765-0.415   c-5.37-0.738-10.525-1.441-13.921-1.578c-8.154-0.306-10.505,0.34-14.587,0.997c-1.258,0.213-2.507,0.1-3.794-0.186   c-3.008-0.597-6.146-2.066-9.45-2.776c-4.785-0.97-8.856,1.016-14.282,2.306c-0.361,0.083-0.722,0.167-1.091,0.204   c-5.729,0.59-16.113-3.166-24.721-3.166c-5.507,0-13.18-1.264-18.77-2.36c-2.814-0.583-5.1-1.08-6.257-1.367   c-0.398-0.073-0.657-0.156-0.795-0.193c-0.769-0.187-4.202-0.426-8.497-0.62c-3.433-0.101-7.377-0.157-10.846-0.027   c-7.84,0.35-15.272,1.31-19.705,3.276c-4.434,1.946-9.516-5.223-12.217-6.192c-2.73-0.997-4.758-0.997-17.327,0.313   c-12.568,1.31-10.208,2.297-13.928,2.953c-3.73,0.647-8.831-2.953-11.875-0.656c-3.082,2.262-13.938-4.909-24.12-1.964   c-10.208,2.917-25.506,8.158-31.93,10.769C22.897,36.101,10.893,34.707,0,33.118V55.95c2.388,0.276,4.238,0.59,5.193,0.894   c5.45,1.746,12.698,5.225,19.028,4.366c6.322-0.895,12.689,2.611,12.689,2.611l4.7-1.513l0.742-0.24c0,0,1.536-0.359,3.369-0.396   c0.962,0,1.999,0.101,2.961,0.396c2.701,0.857,3.61,2.61,6.331,0c0.184-0.176,0.377-0.396,0.499-0.573   c0.278-0.34,0.51-0.691,0.658-0.996c1.046-1.909,1.027-3.479,4.609-1.8c0.314,0.148,0.665,0.324,1.083,0.517   c0.129,0.074,0.268,0.167,0.398,0.241c3.665,2.012,4.627,0.525,5.274-1.255c0.13-0.352,0.269-0.712,0.38-1.072   c0.055-0.156,0.111-0.286,0.167-0.442c0.324-0.737,0.73-1.384,1.425-1.597c1.426-0.44,1.601,0.489,2.203,1.422   c0.121,0.12,0.194,0.23,0.297,0.361c0.231,0.256,0.509,0.496,0.896,0.682c0.658,0.257,1.564,0.37,2.953,0.146   c5.423-0.858,3.61-0.858,9.051-0.858c5.424,0,32.597-3.478,32.597-3.478l16.308,6.091l0.833-2.844l0.379-1.217l0.61-2.03   c1.49,0.471,2.871,0.758,4.055,0.921c0.323,0.021,0.621,0.056,0.879,0.075c2.591,0.241,4.101-0.139,4.101-0.139h6.368   c5.432,0.867,9.949,3.479,9.949,3.479s2.083-0.812,4.016-1.846c0.518-0.293,1.009-0.609,1.444-0.903   c0.353-0.222,0.648-0.479,0.889-0.729c1.5-1.457,3.637-4.143,5.906-3.423c0.443,0.11,0.841,0.341,1.24,0.737l0.092,0.076   c2.712,2.609-0.889,5.229,2.712,2.609c3.6-2.573-0.759,5.02,3.48-2.279l0.167-0.33c0.352-0.604,0.676-1.164,0.943-1.663   c3.555-6.165,3.555-6.165,3.555-6.165l3.054,0.959l0.103,0.029l0.999,0.341l2.962,0.942v0.018l4.609,1.459l1.869,0.6l6.357,4.347   c0,0,5.435,1.743,6.322-0.866c0.704-2.087,3.775-0.832,4.952-0.26c0.304,0.146,0.5,0.26,0.5,0.26s0.694-1.09,1.813-2.253   c0.435-0.387,0.87-0.83,1.38-1.19c1.11-0.877,2.423-1.523,3.82-1.486c0.557,0,1.13,0.13,1.723,0.414   c0.082,0.066,0.203,0.103,0.296,0.158c4.081,2.36,8.182,3.994,10.245,1.125c0.25-0.324,0.436-0.701,0.629-1.125   c0.028-0.035,0.028-0.075,0.056-0.092c0.889-2.03,2.379-1.644,4.027-0.923c0.407,0.147,0.786,0.369,1.184,0.553   c1.371,0.61,2.721,1.163,3.814,0.462c0.749-0.499,1.295-1.052,1.758-1.569c0.334-0.343,0.602-0.682,0.907-0.979   c0.48-0.487,1-0.887,1.75-1.032c0.286-0.055,0.61-0.084,0.98-0.027c0.25,0,0.538,0.027,0.815,0.1c0.037,0,0.092,0.037,0.111,0.037   c0.518,0.119,1.045,0.166,1.554,0.196c3.064,0.229,6.09-1.074,8.423-1.074c1.657,0,4.018-0.643,6.628-1.18   c0.054,0,0.083,0,0.137-0.009c0.63-0.11,1.277-0.24,1.945-0.313c1-0.166,2.026-0.24,3.062-0.24c4.536,0,15.392,1.742,28.979,6.091   c13.216,4.227,11.023,6.82,17.501,3.783c0.204-0.109,0.388-0.166,0.611-0.275c2.25-1.11,4.774-1.606,7.237-1.753   c5.525-0.39,10.829,0.866,12.698,0.866c2.71,0,6.34,0,6.34,0l4.536-0.866c0,0,9.059-0.223,9.717-0.464   c0.676-0.202,5.656-0.414,5.656-0.414s1.814,2.168,1.814,0.878c0-1.331,2.517,1.29,2.043-0.878   c-0.074-0.359-0.101-0.691-0.054-1.006c0.13-1.44,1.444-1.847,2.574,0.129c0.194,0.368,0.351,0.701,0.525,0.987v0.037   c0.845,1.522,0.945,1.8,1.704,0.508c0.889-1.457,1.314-1.128,3.73-1.847c0.101-0.027,0.241-0.091,0.352-0.11h0.037   c0.234-0.074,0.475-0.147,0.695-0.185c0.685-0.129,1.333-0.146,1.935-0.109c1.685,0.146,2.998,0.719,2.998,0.719l2.711,1.755   c0,0,2.287,1.937,3.379,1.529c1.156-0.443,1.36-1.752,3.664-1.3c2.25,0.413,4.749,2.169,5.646,1.707   c0.899-0.407,1.805,2.418,3.399-1.07c0.054-0.146,0.127-0.261,0.184-0.407c0.592-1.016,1.333-1.189,2.119-1.033   c0.491,0.074,1.019,0.305,1.518,0.518c0.472,0.22,0.936,0.47,1.343,0.59c0.332,0.149,0.675,0.187,0.963,0.109   c1.555-0.413,7.236-1.309,7.236-1.309s7.905-1.089,8.831-1.311c0.277-0.046,0.739-0.221,1.321-0.424   c1.444-0.517,3.629-1.236,5.231-1.09c0.103,0,0.193,0.037,0.277,0.037c1.999,0.146,2.025,0.057,8.126,2.122   c6.313,2.197,13.338,1.754,14.466,1.561c1.156-0.229,24.684,0.413,34.652-1.107c9.977-1.505,8.83-1.505,9.977-1.505   c1.12,0,2.721,1.505,4.294-0.895c0.02-0.029,0.037-0.082,0.037-0.102c0.398-0.545,0.739-1.07,1.12-1.577   c1.203-1.616,2.397-2.667,3.593-2.023c0.294,0.187,0.545,0.351,0.693,0.574c0.36,0.396,0.518,0.775,0.825,0.986   c0.332,0.286,0.823,0.342,1.869-0.027c2.507-0.85,8.163,3.47,9.523,3.691c1.36,0.231,0.898,3.045,7.247,1.089   c0.528-0.147,0.982-0.313,1.454-0.443c4.185-1.384,6.267-2.287,8.45-2.084c0.548,0.053,1.093,0.157,1.648,0.367   c3.155,1.071,6.802,1.948,9.513,2.604c2.713,0.646,6.795,3.488,10.191,1.513c0.444-0.221,0.825-0.424,1.176-0.607   c2.537-1.257,3.774-1.017,6.736-1.753c0.28-0.076,0.565-0.112,0.835-0.149c2.925-0.111,5.294,3.248,12.531,4.062   c7.941,0.867,18.557-0.443,27.636,3.673c9.051,4.169,12.216,6.782,11.772,2.851c-0.064-0.36-0.064-0.675,0-0.931   c0.01-0.473,0.176-0.833,0.407-1.11c0.973-1.282,3.443-0.626,4.118-1.456c0.13-0.148,0.354-0.26,0.639-0.313   c0.472-0.072,1.083-0.046,1.731,0.054c1.825,0.213,3.961,0.906,3.961,0.906s2.731,0,3.389,1.551   c0.703,1.513-0.204-1.101,2.046-0.888c2.266,0.214,4.302,4.56,4.302,2.613c0-1.959,4.074-0.426,3.389-0.213   c0.287-0.037,0.926-0.288,1.434-0.777c0.268-0.257,0.499-0.58,0.611-0.969c0.277-0.894,1.619-1.264,2.664-1.28   c0.455,0,0.843,0.054,1.037,0.173c0.12,0.057,0.167,0.14,0.149,0.24c-0.074,0.23,0.101,0.711,0.358,1.229c0,0,0,0,0,0.026   c0.491,0.95,1.233,2.011,1.233,2.011s1.813-1.753,2.5-2.399c0.656-0.654,3.848,3.472,4.747,3.046   c0.769-0.378,7.858-1.217,10.024-1.9c0.027,0,0.063,0,0.063-0.026c0.325-0.075,0.501-0.167,0.556-0.261   c0.204-0.256,0.695-0.238,1.323-0.046c0.999,0.231,2.343,0.75,3.667,1.146c2.247,0.654,2.247,1.087,7.932,0.654   c5.645-0.434,7.904,0.238,16.297,1.292c8.356,1.106-6.571,4.596,24.203,3.282c30.818-1.309,26.737,0,33.54,1.967   c3.806,1.08,7.035,2.9,9.582,3.867c1.591,0,3.183-0.063,4.803-0.063c2.915,0,5.849-0.048,8.791-0.048h0.074   c3.74-0.026,7.451-0.073,11.18-0.073c1.056,0,2.11-0.036,3.175-0.036c25.952-0.176,52.023-0.388,78.198-0.573   c1.454,0,2.897-0.037,4.322-0.037c0.982,0,1.962-0.017,2.934-0.017c0.786,0,1.582-0.02,2.397-0.02h1.073   c2.239-0.037,4.469-0.037,6.719-0.055c32.645-0.212,65.325-0.479,97.968-0.71c0.648,0,1.313,0,1.942-0.029   c0.584-0.166,1.159-0.332,1.693-0.517c0.659-0.173,1.308-0.369,1.926-0.535c14.021-4.06,22.454-3.56,31.229-2.271   c10.188,1.551,18.547-3.246,24.238-5.858c5.653-2.62,9.737-3.497,9.737-3.497s6.097,0.877,7.236,0.45c1.13-0.45,2.721,0,5.655-0.24   c2.925-0.21,8.849-0.21,18.141-5.212c9.255-5.003,24.877-3.913,25.535-3.913c0.692,0,12.041-1.735,12.041-1.735   s7.46,3.258,9.282,3.47c1.798,0.202,2.721-1.311,2.473-3.064c-0.214-1.716,0.665-3.016,1.36-2.602   c0.685,0.442,1.341,4.355,3.406,3.71c2.025-0.655,7.236,1.744,8.384,0c1.102-1.754,4.979,0.442,6.118,0.646   c1.11,0.222,9.504,1.977,12.893-0.85c3.396-2.851,9.052,0.204,11.772-1.55c2.729-1.728,3.636,15.68,8.375,4.376   c4.748-11.315,6.358-6.746,10.652-6.104c4.296,0.657,9.053,0.657,10.413,0.427c1.343-0.213,6.109-3.702,9.957-4.145   c3.86-0.433,10.416-0.644,14.485-1.078c4.073-0.416,31.471,0.241,39.401,1.078c7.94,0.876,12.902,1.976,12.902,1.976   s-2.241,8.712,0.462,6.515c2.721-2.159,11.348-5.858,11.551-6.957c-0.02,0.553,0.248,2.085,2.722,2.398   c3.616,0.443,9.262,0.213,15.169,0.443c5.895,0.221,9.727-0.657,11.551-1.1c1.814-0.434,14.723-3.708,23.554-3.919   c8.818-0.193,40.074,2.177,41.648,2.177c1.417,0,2.61,1.146,2.915,1.459c-0.168-0.261-0.685-1.459,2.092-2.779   c3.139-1.522,6.109,0.229,6.109,0.229s0.906,2.189,2.249,0.434c1.368-1.713,6.803-0.434,7.698-1.07   c0.936-0.643,5.896,1.304,5.896,1.304s2.035-1.304,5.656-0.443c3.646,0.867,0.239,2.823,7.941,1.753   c7.68-1.106,9.727-8.065,19.693-8.731c9.968-0.645,24.898,5.908,26.028,3.49c1.118-2.334,5.431-3.434,8.55-3.887   c-0.906,0.232-1.267,0.573,7.32,0.186c14.255-0.637,21.732,1.753,24.196-0.193c2.515-1.986,5.448-4.172,7.476-3.509   c2.036,0.647,6.803,3.066,7.479,3.703c0.686,0.653,3.406,0,5.22,0.211c1.822,0.24,2.926-1.514,4.072-1.318   c1.148,0.247,7.479,3.516,7.479,3.516s8.828,2.167,11.077,2.167c2.286,0,12.479-2.369,15.189-2.167   c2.71,0.201,8.366,0.868,10.19,0.664c1.795-0.25,8.597,0.628,11.087,1.29c2.497,0.666,3.617,2.373,6.108,0.213   c2.498-2.167,4.534-1.753,5.895-3.275c1.361-1.494,3.638-1.3,5.201-0.85c1.61,0.443,3.389,0.646,4.989-0.867   c1.583-1.55,4.757-2.843,6.813-1.31c2.026,1.533,1.574,14.377,4.736,8.915c3.166-5.436,11.302-3.488,13.357-4.982   c2.034-1.553,2.489,3.007,4.535,1.07c2.025-1.977,9.717,0.229,10.863,0.652c1.14,0.434,4.536,2.189,7.942,3.26   c3.398,1.105,32.134,10.445,56.374,6.329c24.213-4.153,26.488-1.098,28.294-1.098c1.824,0,10.188,1.302,13.132,1.744   c2.954,0.425,15.393-3.924,19.473-2.196c4.083,1.754,9.283,2.196,9.283,2.196s10.663,0.656,14.272-0.203   c3.619-0.895,15.847,3.249,15.847,3.249s4.061-0.443,6.117,0c2.035,0.424,7.042,4.346,9.746,6.312   c2.721,1.966,6.33,4.126,6.551,3.506c0.231-0.672,8.841-7.418,13.152-8.931c4.285-1.523,6.118-6.979,12.671-6.333   c6.572,0.656,6.572,10.659,9.504,5.87c2.961-4.78,4.313-1.061,7.461-3.47c3.201-2.4,4.997-3.924,10.873-1.098   c5.916,2.813,6.805,8.296,10.432,5.03c1.66-1.5,2.501-2.301,3.295-2.703V35.975C1916.098,35.377,1912.02,34.722,1907.968,34.071z"
            />
            <path
              fill="#fff"
              d="M1919.943,44.415v-0.186h-0.017c-1.464,0.111-3.35,0.057-5.638-0.138   c-6.432-0.536-15.688-2.096-24.591-3.499c-2.609-0.403-4.773-0.84-6.626-1.227c-6.968-1.485-9.081-2.583-12.052-1.042   c-2.351,1.235-7.117-0.258-11.104-2.197c-3.87,0.397-7.2,0.97-8.69,1.846c-4.749,2.844-10.191,2.178-14.948,2.844   c-4.055,0.533-6.146-5.076-8.644-7.152c-0.427-0.351-0.879-0.583-1.332-0.693c-1.225-0.267-3.286-0.054-5.463,0.516   c-0.017,0-0.017,0-0.017,0c-3.436,0.923-7.183,2.749-8.563,5.149c-2.246,3.933-7.005-3.043-8.827-3.486   c-0.556-0.113-2.176-0.693-4.185-1.45c-4.739-1.743-11.661-4.419-11.661-4.419s-4.757,1.717-7.017,1.974   c-2.284,0.203-4.997-0.664-11.789,0.646c-6.795,1.31-4.51,3.025-9.728,5.445c-1.547,0.69-2.603,0.978-3.305,1.007   c-1.057,0.036-1.445-0.417-1.675-0.786c-0.158-0.221-0.261-0.443-0.465-0.443c-0.073,0-0.277-0.027-0.638-0.084h-0.028   c-2.609-0.414-11.901-2.094-14.493-1.89c-0.841,0.063-1.852,0.156-2.951,0.203c-0.882,0.054-1.834,0.101-2.834,0.147   c-2.175,0.129-4.552,0.312-6.904,0.525c-4.757,0.451-11.088-0.876-12.679-1.1c-1.574-0.203-14.717-2.176-16.528-2.379   c-1.825-0.24-30.109-3.922-30.109-3.922s-15.189-5.453-17.658-5.012c-2.5,0.443-17.909-4.373-22.416-3.063   c-4.527,1.309-4.759,0.886-9.07,2.862c-4.285,1.946-13.363,3.247-17.42,4.113c-4.072,0.87-11.549,3.729-17.896,1.533   c-6.351-2.187-7.926-1.07-15.393,0.886c-7.47,1.957-7.721,1.957-13.838,1.717c-3.739-0.13-10.736-2.4-15.566-4.153   c-0.084-0.037-0.195-0.037-0.27-0.073c-2.915-1.043-4.971-1.846-4.971-1.846s-24.45-3.932-29.006-4.576   c-4.526-0.666-9.503-1.772-10.181-1.109c-0.285,0.26-1.758,0.73-3.413,1.153c-2.25,0.574-4.814,1.117-5.193,1.256   c-0.687,0.194-21.065,3.276-30.571,3.903c-9.522,0.656-7.913,3.065-11.772,5.039c-3.868,1.956-13.373,1.716-16.982,3.469   c-1.759,0.87-3.341,0.683-5.238,0.186c-1.952-0.48-4.295-1.256-7.654-1.496c-6.581-0.443-9.062-1.956-13.594-1.31   c-4.546,0.646-13.599-0.442-19.494-0.203c-5.857,0.203-11.762-2.197-18.547-1.31c-0.334,0.053-0.658,0.073-0.953,0.127   c-6.229,0.766-10.237,0.989-16.706,2.252c-1.036,0.223-2.138,0.387-3.184,0.516c-5.924,0.923-12.013,1.33-14.483,1.894   c-2.936,0.646-20.39-0.86-22.639,0.213c-2.286,1.087-9.302-1.736-15.874-2.18c-6.541-0.443-9.931-2.416-15.622-1.752   c-3.591,0.423-6.274-0.59-9.052-1.617c-1.563-0.636-3.183-1.254-4.961-1.65c-5.007-1.07-10.44-3.683-18.808-2.612   c-8.375,1.089-13.373,0.23-19.223,1.966c-5.906,1.736-15.409-2.39-21.769-2.39c-6.349,0-10.412-1.746-10.412-1.746   s0.23,0.869-2.497,1.746c-2.705,0.857-7.026,0-21.038,4.789c-3.747,1.273-5.608,1.956-6.395,2.25   c0.832-0.424,2.082-1.327-0.417-1.597c-1.989-0.23-3.333-0.543-4.442-0.8c-1.87-0.454-2.981-0.796-5.295-0.517   c-3.609,0.46-11.569,0.46-16.726,0c-5.237-0.426-14.065,1.107-17.926,1.107c-3.831,0-14.252-3.267-20.131-4.375   c-5.894-1.09-6.792,0.869-11.531,4.782c-3.655,3.006-10.477,0.664-19.474,0.764c-2.785,0-5.729,0.296-8.865,0.989   c-13.355,3.062-43.937,20.255-49.368,20.707c-5.442,0.416-10.625,6.296-10.625,6.296s-7.033,2.619-11.783,4.373   c-4.757,1.752-7.69,0.203-15.382,1.956c-7.728,1.735-21.305-3.266-29.006,1.505c-7.691,4.826-10.643-2.159-18.548-3.683   c-7.931-1.532-11.337,1.07-15.418,2.824c-4.071,1.753-6.571-0.193-8.607-0.193c-0.351,0-0.842-0.093-1.49-0.204   c-3.156-0.58-9.376-2.427-11.625-2.427c-2.728,0-11.559,0-16.77,1.734c-2.908,0.959-7.006,1.329-11.134,1.569   c-3.295,0.147-6.562,0.203-9.256,0.379c-5.026,0.378-7.423-0.759-13.643-2.115c-1.341-0.283-2.895-0.59-4.693-0.92   c-6.579-1.146-9.208-1.163-11.652-1.034c-1.276,0.045-2.507,0.157-4.172,0.157c-4.99,0-7.711,0.451-11.341-1.071   c-3.627-1.542-9.967-4.364-12.244-3.268c-2.249,1.08-8.837,1.319-8.837,1.319s-2.343-0.608-4.896-1.42   c-2.647-0.868-5.489-1.956-6.388-2.962c-1.831-1.946-12.688-3.913-18.584-3.913c-5.867,0-5.442,2.168-9.513,3.7   c-4.071,1.522-6.119,1.742-9.042,1.966c-1.567,0.109-5.702-0.5-11.107-1.283c-4.906-0.683-10.839-1.486-16.752-1.977   c-12.438-1.105-11.772-2.406-20.851-2.859c-9.055-0.406-14.689-2.603-19.707-0.406c-4.96,2.16-12.641-3.063-19.222-2.196   c-6.582,0.888-7.941-0.645-7.941-0.645s-2.738-0.479-4.941-0.925c-1.14-0.24-2.149-0.479-2.527-0.607   c-1.109-0.443-6.126-3.045-10.625-3.469c-4.536-0.443-3.851,0.203-6.785,2.822c-2.971,2.603-9.977-1.513-12.003-1.09   c-2.046,0.443-10.663-3.488-22.204-3.043c-2.563,0.11-5.377,0.127-8.3,0.11h-0.02c-10.329-0.029-22.314-0.556-31.309-0.556   c-0.364,0-0.705,0-1.02-0.018c-10.421-0.166-8.803-3.026-11.662-2.806c-2.942,0.213-4.756-2.844-7.912-1.107   c-3.176,1.774-7.721-0.849-8.831,0.221c-1.139,1.1-3.646-2.381-6.119-2.381c-2.488,0-6.348,0.424-8.143,2.824   c-1.832,2.409-6.792-0.443-8.617-0.211c-1.832,0.211-3.175-1.532-3.175-1.532s-9.514,1.079-13.143-1.3   c-3.609-2.383-4.285-2.623-6.106-4.596c-1.815-1.939-12.44-5.872-18.538-6.516c-5.277-0.572-9.719,3.396-13.449,5.776   c-0.602,0.36-1.176,0.72-1.758,0.997c-2.674,1.273-6.127-1.09-10.894-2.629c-2.527-0.804-5.441-1.394-8.82-1.1   c-5.185,0.48-8.543,1.413-11.198,3.093c-2.323,1.413-4.091,3.416-5.989,6.063c-4.062,5.668-6.996,0.859-11.338,4.569   c-3.146,2.723-7.267,0.746-10.051-0.231c-0.999-0.368-1.851-0.59-2.377-0.426c-0.604,0.187-1.399,0.224-2.306,0.131   c-2.259-0.083-5.144-0.618-6.748,0.322c-2.286,1.303-3.396,0-4.535,0.416c-1.154,0.441-6.792-1.715-6.792-1.715   s-5.914,1.069-16.983-0.241c-0.675-0.076-1.313-0.166-1.896-0.213c-9.229-0.939-9.442,0.213-9.442,0.213s-4.082,2.188-8.376,3.063   c-4.286,0.85-5.887-2.631-7.46-3.063c-1.572-0.426-10.198-2.612-13.383-2.612c-3.146,0-6.793,0.646-11.753,1.966   c-4.97,1.291-12.448,0.646-17.197,0.646c-4.766,0-9.755-1.533-14.726,0.241c-4.46,1.529-6.94-1.091-9.042,1.013   c-0.241,0.239-0.452,0.554-0.692,0.934c-2.278,3.698-4.546,0-6.795-0.231c-2.286-0.212-2.507-1.956-5.432-2.603   c-2.972-0.666-5.682,1.291-7.247,2.834c-1.186,1.136-2.84,0.109-4.637-1.21c-0.639-0.471-1.305-0.95-1.962-1.403   c-2.462-1.733-13.329-4.807-15.374-4.56c-2.026,0.204-6.348-0.247-6.348,0.406c0,0.667-6.803-2.176-8.359-4.576   c-1.591-2.363-1.36,0.24-19.925,1.107c-3.667,0.147-5.877,0.646-7.072,1.33c-4.877,2.713,7.146,8.544,6.599,8.906   c-0.667,0.423-10.181-3.057-12.894,0c-2.721,3.035-1.59,1.319-7.699,2.822c-6.099,1.523-10.43-1.503-17.436-0.856   c-7.026,0.643-4.758,0.856-11.562,0.856c-6.782,0-8.144-3.266-9.985-1.946c-1.777,1.293-7.876-0.221-9.699,2.159   c-1.833,2.399-6.794-0.427-7.961,0.24c-1.09,0.646-11.281,0.423-14.677,1.513c-3.407,1.09-4.545-1.966-8.607,1.311   c-4.083,3.266-2.731,1.292-4.97,3.47c-2.296,2.195-2.296-0.204-3.86-0.655c-1.583-0.414-5.452-3.922-7.016-3.035   c-1.611,0.866-9.079,3.035-9.978,3.035c-0.897,0-17.668-1.946-29.006-2.611C0.759,47.976,0.398,47.941,0,47.902V72.81h1920V45.63   C1919.981,45.227,1919.966,44.827,1919.943,44.415z"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
