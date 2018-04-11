import { ContextType } from './context-type';
export class ContextTypes {

  static readonly BUILTIN: Map<string, ContextType> = new Map<string, ContextType>([
    [
      'user',
      {
        name: 'User',
        icon: 'pficon pficon-user',
      } as ContextType
    ],
    [
      'organization',
      {
        name: 'Organization',
        icon: 'fa fa-cubes'
      } as ContextType
    ]
  ]);

}
