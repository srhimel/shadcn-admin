import { DataTableColumnHeader } from './data-table-column-header'

import { Button } from '@/components/custom/button'

export const columns = [
  {
    accessorKey: 'shop',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Shop' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('shop')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'task',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Task' />
    ),
    cell: ({ row }) => {
      return <div className='flex space-x-2'>{row.getValue('task')}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex w-[100px] items-center'>
          {row.getValue('status')}
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: 'actions',
    cell: ({ row }) => (
      <div className='flex justify-end gap-3'>
        <Button size={'sm'} variant={'outline'}>
          View Details
        </Button>
      </div>
    ),
  },
]
