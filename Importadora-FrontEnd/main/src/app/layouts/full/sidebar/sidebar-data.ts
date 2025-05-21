import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Panel Principal',
  },
  {
    displayName: 'Panel',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  }, 
  {
    displayName: 'Ventas',
    iconName: 'notes',
    route: '/ui-components/chips',
  },
   {
    displayName: 'Inventario',
    iconName: 'clipboard-text',
    route: '/ui-components/inventario',
  },
  {
    displayName: 'Ventas registradas',
    iconName: 'shopping-cart-up',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Clientes',
    iconName: 'users',
    route: '/ui-components/menu',
  },
  {
    groupStart: true ,
    displayName: 'Proveedores',
    iconName: 'user',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Importaciones',
    iconName: 'truck',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Caja',
    iconName: 'coins',
    route: '/ui-components/tables',
  },
  
  {
    groupStart: true ,
    displayName: 'Registro Usuarios',
    iconName: 'user-circle',
    route: '/extra/icons',
  },
  {
    displayName: 'Almacenes',
    iconName: 'building-warehouse',
    route: '/extra/sample-page',
  },
  {
    groupStart: true ,
    displayName: 'Maintenance',
    iconName: 'settings',
    route: 'https://modernize-angular-main.netlify.app//authentication/maintenance',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
];
