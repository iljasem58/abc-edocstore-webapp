export interface PeriodicElement {
  format: string;
  name: string;
  id: string;
  created: string;
  modified: string;
  type: string;
  comment: string;
  img?: string;
}

export interface DataCollection {
  folderName: string;
  data: PeriodicElement[];
}

export interface Folders {
  name: string;
  children?: Folders[];
}

export const TREE_DATA: Folders[] = [
  {
    name: 'Office',
    children: [
      {
        name: 'Workers',
        children: [
          {name: 'Workers 2021',
            children:[
              {name: 'Winter 21'},
              {name: 'Spring 21'},
              {name: 'Summer 21'},
              {name: 'Autumn 21'},
            ]
          },
          {name: 'Workers 2022',
            children:[
              {name: 'Winter 22'},
              {name: 'Spring 22'},
              {name: 'Summer 22'},
              {name: 'Autumn 22'},
            ]
          },
        ],
      },
      {name: 'Bills',
        children: [
          {name: 'Bills 2021'},
          {name: 'Bills 2022'},
        ],
      },
    ],
  },
  {
    name: 'Company projects',
    children: [
      {
        name: 'Security',
        children: [{ name: 'Authentication issues' }, { name: 'Token validation' }],
      },
      {
        name: 'Applications',
        children: [{ name: 'Communication' }, { name: 'Home office' }],
      },
    ],
  },
];

export const DEFAULT_DATA: PeriodicElement[] = [];

export const DATA_COLLECTION: DataCollection[] = [
  {
    folderName: 'Winter 21',
    data: [
      {
        format: 'docx',
        name: 'January joiners',
        id: 'jan21',
        created: '01.01.2021',
        modified: '31.01.2021',
        type: 'document',
        comment: '',
        img: 'https://via.placeholder.com/1000x1000.png?text=January+joiners+ID=jan21',
      },
      {
        format: 'docx',
        name: 'February joiners',
        id: 'feb21',
        created: '01.02.2021',
        modified: '31.02.2021',
        type: 'document',
        comment: '',
        img: 'https://via.placeholder.com/1000x1000.png?text=February+joiners+ID=feb21',
      },
      {
        format: 'docx',
        name: 'December joiners',
        id: 'dec21',
        created: '01.12.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
        img: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt00112764_quantized.png',
      },
    ],
  },
  {
    folderName: 'Spring 21',
    data: [
      {
        format: 'docx',
        name: 'March joiners',
        id: 'mrc21',
        created: '01.03.2021',
        modified: '31.03.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'April joiners',
        id: 'apr21',
        created: '01.04.2021',
        modified: '31.04.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'May joiners',
        id: 'may21',
        created: '01.05.2021',
        modified: '31.05.2021',
        type: 'document',
        comment: '',
      },
    ],
  },
  {
    folderName: 'Summer 21',
    data: [
      {
        format: 'docx',
        name: 'June joiners',
        id: 'jun21',
        created: '01.06.2021',
        modified: '31.06.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'July joiners',
        id: 'jul21jn',
        created: '01.07.2021',
        modified: '31.07.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'August joiners',
        id: 'aug21jn',
        created: '01.08.2021',
        modified: '31.08.2021',
        type: 'document',
        comment: '',
      },
    ],
  },
  {
    folderName: 'Autumn 21',
    data: [
      {
        format: 'docx',
        name: 'September joiners',
        id: 'sep21',
        created: '01.09.2021',
        modified: '31.09.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'October joiners',
        id: 'oct21jn',
        created: '01.10.2021',
        modified: '31.10.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'November joiners',
        id: 'nov21jn',
        created: '01.11.2021',
        modified: '31.11.2021',
        type: 'document',
        comment: '',
      },
    ],
  },
  {
    folderName: 'Winter 22',
    data: [
      {
        format: 'docx',
        name: 'January joiners',
        id: 'jan22',
        created: '01.01.2022',
        modified: '31.01.2022',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'February joiners',
        id: 'feb22',
        created: '01.02.2022',
        modified: '31.02.2022',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'December joiners',
        id: 'feb22',
        created: '01.12.2022',
        modified: '31.12.2022',
        type: 'document',
        comment: '',
      },
    ],
  },
  {
    folderName: 'Spring 22',
    data: [
      {
        format: 'docx',
        name: 'March joiners',
        id: 'mrc22',
        created: '01.03.2022',
        modified: '31.03.2022',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'April joiners',
        id: 'apr22',
        created: '01.04.2022',
        modified: '31.04.2022',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'May joiners',
        id: 'may22',
        created: '01.05.2022',
        modified: '31.05.2022',
        type: 'document',
        comment: '',
      },
    ],
  },
  {
    folderName: 'Summer 22',
    data: [
      {
        format: 'docx',
        name: 'June joiners',
        id: 'jun22',
        created: '01.06.2022',
        modified: '31.06.2022',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'July joiners',
        id: 'jul22jn',
        created: '01.07.2022',
        modified: '31.07.2022',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'August joiners',
        id: 'aug22jn',
        created: '01.08.2022',
        modified: '31.08.2022',
        type: 'document',
        comment: '',
      },
    ],
  },
  {
    folderName: 'Autumn 22',
    data: [
      {
        format: 'docx',
        name: 'September joiners',
        id: 'sep22',
        created: '01.09.2022',
        modified: '31.09.2022',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'October joiners',
        id: 'oct22jn',
        created: '01.10.2022',
        modified: '31.10.2022',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'November joiners',
        id: 'nov22jn',
        created: '01.11.2022',
        modified: '31.11.2022',
        type: 'document',
        comment: '',
      },
    ],
  },
  {
    folderName: 'Bills 2021',
    data: [
      {
        format: 'pdf',
        name: 'Bills for 2021',
        id: 'bill21-pdf',
        created: '01.01.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'Bills for 2021',
        id: 'bill21-docx',
        created: '01.01.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'xlsx',
        name: 'Bills 2021 diagram',
        id: 'bill21-xlsx',
        created: '30.11.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'png',
        name: 'Bills form',
        id: 'bill21-png',
        created: '14.10.2021',
        modified: '17.11.2021',
        type: 'img',
        comment: '',
      },
      {
        format: 'pdf',
        name: 'Bills for 2021-1',
        id: 'bill21-pdf1',
        created: '01.01.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'Bills for 2021-1',
        id: 'bill21-docx1',
        created: '01.01.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'xlsx',
        name: 'Bills 2021 diagram-1',
        id: 'bill21-xlsx1',
        created: '30.11.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'png',
        name: 'Bills form-1',
        id: 'bill21-png1',
        created: '14.10.2021',
        modified: '17.11.2021',
        type: 'img',
        comment: '',
      },
      {
        format: 'pdf',
        name: 'Bills for 2021-2',
        id: 'bill21-pdf2',
        created: '01.01.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'docx',
        name: 'Bills for 2021-2',
        id: 'bill21-docx2',
        created: '01.01.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'xlsx',
        name: 'Bills 2021 diagram-2',
        id: 'bill21-xlsx2',
        created: '30.11.2021',
        modified: '31.12.2021',
        type: 'document',
        comment: '',
      },
      {
        format: 'png',
        name: 'Bills form-2',
        id: 'bill21-png2',
        created: '14.10.2021',
        modified: '17.11.2021',
        type: 'img',
        comment: '',
      },
    ],
  },
];
