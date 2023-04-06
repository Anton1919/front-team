import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { AuthAPI } from '@/features/auth/api';
import { selectSetEmail, selectSetIsAuth, useAuthStore } from '@/features/auth/store';

// export const useLogOutMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: AuthAPI.logOut,
//     onSuccess: (res) => {
//       const { accessToken } = res.data
//       localStorage.setItem('accessToken', accessToken);
//       queryClient.invalidateQueries(['me'])
//     },
//   });
// };
//
//

export const useLogOutQuery = () => {
  const setEmail = useAuthStore(selectSetEmail)
  const setIsAuth = useAuthStore(selectSetIsAuth)
  return useQuery({
    queryFn: AuthAPI.logOut,
    queryKey: ['logOut'],
    retry: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    onSuccess: () => {
      setEmail('')
      setIsAuth(false)
    },
    onError: () => {
      setIsAuth(true)
    }
  });
};