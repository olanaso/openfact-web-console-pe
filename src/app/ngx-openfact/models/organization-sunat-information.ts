export interface OrganizationSunatInformation {
  id: string;
  usuario: string;
  password: string;
  boletaFacturaEndpoint: string;
  guiaRemisionEndpoint: string;
  retencionPercepcionEndpoint: string;
  consultaFacturaEndpoint: string;
  consultaCdrEndpoint: string;

  useCustomConfig: boolean;
}
