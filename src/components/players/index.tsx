import { CITIES, type City } from "@/utils/cities";
import useLocalStorageState from "@/utils/use_local_storage_state";
import classNames from "classnames";
import { Plus, Trash2 } from "lucide-react";
import Select from "../select";
import TextInput from "../text_input";
import Toggle from "../toggle";

const LOCAL_STORAGE_KEY = "BOXCARS_PLAYER_HOME_BASES";

const generateRandomId = () => Math.random().toString(36).substring(2, 15);

type Train = "Starter" | "Express" | "Super Chief";
type Color = "red" | "blue" | "green" | "yellow" | "white" | "black";

type Player = {
  id: string;
  name: string;
  homeBase: City;
  train: Train;
  color: Color;
};

const Players = () => {
  const [players, setPlayers] = useLocalStorageState<Player[]>(
    LOCAL_STORAGE_KEY,
    [],
  );

  const updateKey = <K extends keyof Player>(
    index: number,
    key: K,
    value: Player[K],
  ) => {
    const newPlayers = [...players];
    newPlayers[index][key] = value;
    setPlayers(newPlayers);
  };

  return (
    <div className="space-y-6">
      {/* Players List */}
      {players.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Players</h3>
          <div className="space-y-3">
            {players.map((player, index) => (
              <div
                key={player.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center">
                    <label className="w-18 ml-2 block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <TextInput
                      type="text"
                      placeholder="Enter player name"
                      value={player.name}
                      onChange={(e) => updateKey(index, "name", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w-18 ml-2 block text-sm font-medium text-gray-700 mb-1">
                      Home
                    </label>
                    <Select
                      options={CITIES}
                      selected={player.homeBase}
                      onSelected={(homeBase) =>
                        updateKey(index, "homeBase", homeBase)
                      }
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w-18 ml-2 block text-sm font-medium text-gray-700 mb-1">
                      Train
                    </label>
                    <Toggle
                      options={["Starter", "Express", "Super Chief"]}
                      selected={player.train}
                      onSelected={(train) => updateKey(index, "train", train)}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="w-18 ml-2 block text-sm font-medium text-gray-700 mb-1">
                      Color
                    </label>
                    <div className="flex bg-gray-100 rounded-lg p-1 w-full overflow-y-auto">
                      <button
                        type="button"
                        className={classNames(
                          "flex-1 h-12 text-sm font-medium rounded-md transition-all duration-200 border-4",
                          player.color === "red"
                            ? "bg-red-500 border-amber-600 shadow-sm"
                            : "bg-red-300 border-red-300",
                        )}
                        onClick={() => updateKey(index, "color", "red")}
                      />
                      <button
                        type="button"
                        className={classNames(
                          "flex-1 h-12 text-sm font-medium rounded-md transition-all duration-200 border-4",
                          player.color === "blue"
                            ? "bg-blue-500 border-amber-600 shadow-sm"
                            : "bg-blue-300 border-blue-300",
                        )}
                        onClick={() => updateKey(index, "color", "blue")}
                      />
                      <button
                        type="button"
                        className={classNames(
                          "flex-1 h-12 text-sm font-medium rounded-md transition-all duration-200 border-4",
                          player.color === "green"
                            ? "bg-green-500 border-amber-600 shadow-sm"
                            : "bg-green-300 border-green-300",
                        )}
                        onClick={() => updateKey(index, "color", "green")}
                      />
                      <button
                        type="button"
                        className={classNames(
                          "flex-1 h-12 text-sm font-medium rounded-md transition-all duration-200 border-4",
                          player.color === "yellow"
                            ? "bg-yellow-500 border-amber-600 shadow-sm"
                            : "bg-yellow-300 border-yellow-300",
                        )}
                        onClick={() => updateKey(index, "color", "yellow")}
                      />
                      <button
                        type="button"
                        className={classNames(
                          "flex-1 h-12 text-sm font-medium rounded-md transition-all duration-200 border-4",
                          player.color === "white"
                            ? "bg-white border-amber-600 shadow-sm"
                            : "bg-neutral-200 border-neutral-200",
                        )}
                        onClick={() => updateKey(index, "color", "white")}
                      />
                      <button
                        type="button"
                        className={classNames(
                          "flex-1 h-12 text-sm font-medium rounded-md transition-all duration-200 border-4",
                          player.color === "black"
                            ? "bg-black border-amber-600 shadow-sm"
                            : "bg-neutral-500 border-neutral-500",
                        )}
                        onClick={() => updateKey(index, "color", "black")}
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button
                      type="button"
                      className="w-full p-3 text-red-600 hover:bg-red-50 rounded-lg flex justify-center items-center gap-2 border-2 border-red-400"
                      onClick={() => {
                        const newPlayers = players.filter(
                          (p) => p.id !== player.id,
                        );
                        setPlayers(newPlayers);
                      }}
                      title="Remove player"
                    >
                      <Trash2 />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Player Button */}
      <button
        type="button"
        className="w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 flex justify-center gap-2"
        onClick={() =>
          setPlayers([
            ...players,
            {
              id: generateRandomId(),
              name: "",
              homeBase: CITIES[0],
              train: "Starter",
              color: "red",
            },
          ])
        }
      >
        <Plus />
        Add Player
      </button>

      {/* Empty State */}
      {players.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No players added yet</p>
          <p className="text-sm text-gray-400">
            Click "Add Player" to get started
          </p>
        </div>
      )}
    </div>
  );
};

export default Players;
