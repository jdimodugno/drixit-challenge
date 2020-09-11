import { ITableHead } from "../interfaces/ITableHead";

export const StatisticTableHead : ITableHead = {
  columns: [{
    label: '% de Tiempo Ac 6',
    sortingKey: 'acc6%',
  }, {
    label: 'Acc B6 Total - Eff',
    sortingKey: 'acc6',
  }, {
    label: '% de Tiempo Ac 7',
    sortingKey: 'acc7%',
  }, {
    label: 'Acc B7 Total - Eff',
    sortingKey: 'acc7',
  }, {
    label: '% de Tiempo Ac 8',
    sortingKey: 'acc8%',
  }, {
    label: 'Acc B8 Total - Eff',
    sortingKey: 'acc8',
  }]
};