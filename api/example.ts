import { useMutation, useQuery } from "@tanstack/react-query";

interface IResponse {
  data: {
    results: StarShip[];
  };
}

export interface StarShip {
  model: string;
  crew: string;
  starship_class: string;
  name: string;
}

export const useSearchStarShip = (starshipName?: string) => {
  return useQuery<IResponse>({
    queryKey: ["example"],
    queryFn: async () => {
      const options = {
        method: "GET",
        // headers: new Headers({
        //   Authorization: `Bearer ${accessToken}`,
        // }),
      };
      const url = `https://swapi.dev/api/starships?search=${starshipName}`; /// add somewhere to get
      const res = await fetch(url, options);
      if (!res.ok) {
        throw res;
      }
      return await res.json();
    },
    enabled: !!starshipName,
  });
};

//reqbin.com/echo/post/json

export const useCreateFleet = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const options = {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(data),
      };
      const url = "https://reqbin.com/echo/post/json";
      const res = await fetch(url, options);
      if (!res.ok) {
        throw res;
      }
      return await res.json();
    },
  });
};
