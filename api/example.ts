import { useQuery } from "@tanstack/react-query";

interface IResponse {
  data: any;
}

export const useExample = (uuid: string) => {
  return useQuery<IResponse>({
    queryKey: ["example"],
    queryFn: async () => {
      const options = {
        method: "GET",
        // headers: new Headers({
        //   Authorization: `Bearer ${accessToken}`,
        // }),
      };
      const url = ""; /// add somewhere to get
      const res = await fetch(url, options);
      if (!res.ok) {
        throw res;
      }
      return await res.json();
    },
  });
};
