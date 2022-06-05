export interface GroupedData {
    labels: string[],
      datasets: [
        {
          label: string,
          data: any[],
          backgroundColor: any[],
          borderColor: any[],
          borderWidth: number,
        },
      ],
    }