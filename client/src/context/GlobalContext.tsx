import React, { useState, useEffect, useCallback } from 'react';
import IStatistic from '../interfaces/IStatistic';
import StatisticsApi from '../clients/StatisticsApi';

interface IContext {
  data: Array<IStatistic>;
  selectedStatistics: Array<string>;
  selectStatistic: (name: string) => void;
  filter: string;
  setFilter: (name: string) => void;
  fetchError: string|null;
  tryRefetch: () => void;
}

type Props = {
  children: React.ReactNode
};

export const GlobalContext = React.createContext<IContext>({
  data: [],
  selectedStatistics: [],
  selectStatistic: () => { },
  filter: '',
  setFilter: () => { },
  fetchError: null,
  tryRefetch: () => { },
});

const GlobalProvider = ({
  children,
} : Props ) => {
  const [initialFetch, setInitialFetch] = useState<boolean>();
  const [refetch, setRefetch] = useState<boolean>();
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [data, setData] = useState<Array<IStatistic>>([]);
  const [filter, setFilter] = useState<string>('');
  const [selectedStatistics, setSelectedStatistics] = useState<Array<string>>([]);

  const tryRefetch = useCallback(() => { setRefetch(true) }, []);

  const updateSelectedStatistics = useCallback(
    (name: string) => {
      setSelectedStatistics((prev) => prev.includes(name) ?
        prev.filter(e => e !== name) : [...prev, name]
      )
    }, [setSelectedStatistics]
  )

  useEffect(() => {
    if (!initialFetch || refetch) {
      const api = new StatisticsApi();
      api.read()
        .then((resData: Array<IStatistic>) => {
          setData(resData);
          setInitialFetch(true);
          setFetchError(null);
        })
        .catch((err: Error) => setFetchError(err.message))
        .finally(() => {
          setRefetch(false);
        });
    }
  }, [initialFetch, refetch]);

  return (
    <GlobalContext.Provider
      value={{
        tryRefetch,
        fetchError,
        data,
        selectedStatistics,
        selectStatistic: updateSelectedStatistics,
        filter,
        setFilter
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalProvider;