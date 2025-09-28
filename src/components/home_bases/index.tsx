import { CITIES, type City } from "@/utils/cities";
import useLocalStorageState from "@/utils/use_local_storage_state";
import Select from "../select";
import TextInput from "../text_input";
import { Trash2 } from "lucide-react";

const LOCAL_STORAGE_KEY = "BOXCARS_PLAYER_HOME_BASES";

const generateRandomId = () => Math.random().toString(36).substring(2, 15);

type Player = {
  id: string;
  name: string;
  homeBase: City;
};

const HomeBases = () => {
  const [players, setPlayers] = useLocalStorageState<Player[]>(
    LOCAL_STORAGE_KEY,
    [],
  );

  return (
    <div className="w-full flex flex-col items-center gap-4 mb-8">
      {players.map((player, index) => (
        <div key={player.id} className="flex flex-row gap-2">
          <TextInput
            type="text"
            placeholder="Player name"
            value={player.name}
            onChange={(e) => {
              const newPlayers = [...players];
              newPlayers[index].name = e.target.value;
              setPlayers(newPlayers);
            }}
          />
          <Select
            options={CITIES}
            selected={player.homeBase}
            onSelected={(homeBase) => {
              const newPlayers = [...players];
              newPlayers[index].homeBase = homeBase;
              setPlayers(newPlayers);
            }}
          />
          <button
            className="text-red-600 px-2"
            onClick={() => {
              const newPlayers = players.filter((p) => p.id !== player.id);
              setPlayers(newPlayers);
            }}
          >
            <Trash2 />
          </button>
        </div>
      ))}

      <button
        type="button"
        className="w-full border border-black rounded p-2"
        onClick={() =>
          setPlayers([
            ...players,
            { id: generateRandomId(), name: "", homeBase: CITIES[0] },
          ])
        }
      >
        Add Player
      </button>
    </div>
  );
};

export default HomeBases;
