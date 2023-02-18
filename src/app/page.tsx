/* eslint-disable react/no-unescaped-entities */
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">MindMate</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <SunIcon className="w-8 h-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              "Explain quantum computing in simple terms" →
            </p>
            <p className="infoText">
              "Got any creative ideas for a 10 year old's birthday?" →
            </p>
            <p className="infoText">
              "How do I make an HTTP request in Javascript?" →
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <BoltIcon className="w-8 h-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              Provide information and answers to a wide range of topics
            </p>
            <p className="infoText">
              Understand and interpret natural language inputs
            </p>
            <p className="infoText">
              Learn and adapt based on user interactions
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            <ExclamationTriangleIcon className="w-8 h-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May not always understand the context or intent of your question
            </p>
            <p className="infoText">
              May not have access to the latest or most up-to-date information
            </p>
            <p className="infoText">
              Not capable of experiencing emotions or personal interactions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
