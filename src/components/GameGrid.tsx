import { GAMES } from "../constants";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function GameGrid() {
  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Popular Games</h2>
          <p className="text-text-dim">Choose a game to see current offers</p>
        </div>
        <button className="flex items-center gap-2 text-brand hover:underline font-medium">
          View All Games <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {GAMES.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group relative h-[300px] overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="game-card-gradient"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">
                {game.name}
              </h3>
              <div className="flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {game.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md px-2 py-1 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
