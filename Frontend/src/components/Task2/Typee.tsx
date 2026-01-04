type Info = {
  id: number;
  name: string;
  email:string
}

type AdminInfoList = Info & {
  hasAccess: boolean;
}

export type { Info, AdminInfoList };