export type AppConfig = {
  name: string;
  description: string;
  logo: string;
  icon: string;
  address: string;
};

export type AppLink = {
  title: string;
  href: string;
  external?: boolean;
};

export type Institution = {
  name: string;
  logo: string;
  href?: string;
};
