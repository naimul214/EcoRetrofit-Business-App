export default function About() {
  return (
    <main className="flex-1 flex flex-col py-16 px-4">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-6">About EcoRetrofit</h1>
        <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl inline-block mt-8">
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            EcoRetrofit is a Canadian technology company dedicated to decarbonizing the commercial real estate sector. 
            By deploying cutting-edge autonomous AI, we transform legacy buildings into highly efficient, self-managing assets. 
            We believe the fastest path to Net-Zero is optimizing the infrastructure we already have.
          </p>
        </div>
      </div>
    </main>
  );
}
