import { useState } from 'react';
import { deepestLetter, asciiArtTargets, evenlySpacedHashes } from '../utils/codeTests';
import './index.css';

function App() {
  const [input1, setInput1] = useState('a(b)((c)d)e');
  const [input2, setInput2] = useState('[{"x":2,"y":2},{"x":4,"y":4}]');
  const [input3, setInput3] = useState(9);

  return (
    <main className="min-h-screen bg-gray-100 p-6 text-gray-800 font-mono">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-indigo-600">Code Test UI</h1>
          <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
            This page lets you test three small TypeScript functions. Each one solves a different problem:
            <br /><br />
            <strong>1.</strong> <em>Deepest Letter:</em> Finds the first lowercase letter at the deepest level of parentheses.
            <br />
            <strong>2.</strong> <em>ASCII Art Targets:</em> Renders a 7x7 grid using coordinates and draws lines from them.
            <br />
            <strong>3.</strong> <em>Evenly Spaced Hashes:</em> Outputs `#` symbols spaced evenly in a line of given length.
          </p>
        </header>

        {/* Explanation Section */}
        <section className="bg-white shadow-md rounded-xl p-6 border border-indigo-100">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">How It Works</h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <div>
              <strong>Deepest Letter:</strong> This function walks through a string and tracks how deep it is in parentheses.
              If it finds a lowercase letter at a deeper level than before, it stores it. At the end, it returns the first letter
              found at the deepest level.
            </div>
            <div>
              <strong>ASCII Art Targets:</strong> This takes a list of x,y coordinates and draws them in a 7×7 grid. Each point
              is shown as 'O', and lines radiate from each one. If lines intersect, a '+' is shown.
            </div>
            <div>
              <strong>Evenly Spaced Hashes:</strong> Given a total length, this function tries to place as many '#' characters
              as possible with the same number of spaces between each one.
            </div>
          </div>
        </section>

        {/* Deepest Letter */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2 text-indigo-500">1. Deepest Letter</h2>
          <input
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="w-full p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder='e.g. a(b)((c)d)e'
          />
          <p className="text-gray-700">
            Output: <code className="font-bold">{deepestLetter(input1) ?? "null"}</code>
          </p>
        </section>

        {/* ASCII Art */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2 text-indigo-500">2. ASCII Art Targets</h2>
          <textarea
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="w-full p-2 mb-3 border rounded font-mono resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
            rows={4}
            placeholder='e.g. [{"x":2,"y":2},{"x":4,"y":4}]'
          />
          <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto text-sm whitespace-pre">
            {(() => {
              try {
                const parsed = JSON.parse(input2);
                return asciiArtTargets(parsed);
              } catch {
                return "Invalid JSON";
              }
            })()}
          </pre>
        </section>

        {/* Evenly Spaced Hashes */}
        <section className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2 text-indigo-500">3. Evenly Spaced Hashes</h2>
          <input
            type="number"
            min={1}
            value={input3}
            onChange={(e) => setInput3(Number(e.target.value))}
            className="w-full p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder='Enter a number ≥ 3'
          />
          <p className="text-gray-700">
            Output: <code className="font-bold">{evenlySpacedHashes(input3) ?? "null"}</code>
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
