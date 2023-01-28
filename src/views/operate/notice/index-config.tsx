import { parseTime } from '@/utils'
import { FormItemType, HandleType, InteractionType, LabelType, TablePageConfig } from '@gwin/admin-ui'

export default function indexConfig() {
  const tablePageConfig: TablePageConfig = {
    forms: {
      searchForm: [
        {
          key: 'name',
          type: FormItemType.INPUT,
          data: {
            placeholder: '请输入公告名称'
          }
        },
        {
          key: 'status',
          type: FormItemType.SELECT,
          data: {
            placeholder: '请选择公告状态',
            clearable: true
          },
          isGetOptionsFromVariable: true,
          getOptionsFromVariables: {
            variableKey: 'statusVariable'
          }
        },
        {
          key: 'createAt',
          type: FormItemType.DATEPICKER,
          handleKey: 'datetime',
          handleValue: ['startDate', 'endDate'],
          data: {
            'start-placeholder': '发布开始日期',
            'end-placeholder': '发布结束日期',
            type: 'daterange',
            style: {
              width: '240px !important'
            }
          },
          status: true,
          isIgnore: false
        }
      ],
      createForm: [
        {
          key: 'name',
          label: '公告名称',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.INPUT,
          required: true,
          data: {
            value: '',
            maxlength: 50,
            'show-word-limit': true,
            style: {
              width: '400px !important'
            }
          }
        },
        {
          key: 'deadline',
          label: '有效截止时间',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.DATEPICKER,
          required: true,
          data: {
            value: '',
            type: 'datetime',
            format: 'YYYY-MM-DD HH:mm',
            style: {
              width: '400px !important'
            }
          }
        },
        {
          key: 'content',
          label: '公告内容',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.INPUT,
          required: true,
          data: {
            value: '',
            type: 'textarea',
            autosize: { minRows: 2 },
            maxlength: 500,
            style: {
              width: '500px !important'
            },
            'show-word-limit': true
          }
        }
      ],
      editForm: [
        {
          key: 'name',
          label: '公告名称',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.INPUT,
          required: true,
          data: {
            value: '',
            maxlength: 50,
            'show-word-limit': true,
            style: {
              width: '400px !important'
            }
          }
        },
        {
          key: 'deadline',
          label: '有效截止时间',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.DATEPICKER,
          required: true,
          data: {
            value: '',
            type: 'datetime',
            format: 'YYYY-MM-DD HH:mm',
            style: {
              width: '400px !important'
            }
          }
        },
        {
          key: 'content',
          label: '公告内容',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.INPUT,
          required: true,
          data: {
            value: '',
            type: 'textarea',
            autosize: { minRows: 2 },
            style: {
              width: '500px !important'
            },
            maxlength: 500,
            'show-word-limit': true
          }
        }
      ]
    },
    buttonGroup: [
      {
        key: 'search',
        label: '查询',
        icon: '',
        type: '',
        style: {
          color: '#3860f4',
          'border-color': '#3860f4'
        }
      },
      {
        key: 'add',
        label: '新增',
        icon: '',
        type: 'primary',
        interactionType: InteractionType.POPUP,
        title: '新增',
        modalWidth: '800px',
        formKey: 'createForm',
        apiKey: 'addApi',
        onCallback: ['search', 'message'],
        formCancleButton: {
          key: 'cancel',
          label: '取消',
          type: ''
        },
        formActions: [
          {
            key: 'confirm',
            label: '保存',
            type: 'primary'
          },
          {
            key: 'confirm',
            label: '保存草稿',
            type: 'primary',
            apiKey: 'addUnpublishApi'
          }
        ]
      }
    ],
    tableConfig: {
      columns: [
        {
          prop: 'name',
          label: '公告名称',
          showOverflowTooltip: false
        },
        {
          prop: 'content',
          label: '公告内容',
          showOverflowTooltip: true
        },
        {
          prop: 'createAt',
          label: '发布时间',
          showOverflowTooltip: false,
          handleType: HandleType.TIME
        },
        {
          prop: 'deadline',
          label: '有效截止时间',
          showOverflowTooltip: false,
          tsx: (ctx, scope) => {
            return parseTime(scope.row[scope.column.property], '{y}-{m}-{d} {h}:{i}')
          }
        },
        {
          prop: 'status',
          label: '状态',
          showOverflowTooltip: false,
          variableMap: { variableKey: 'statusVariable' }
        },
        {
          prop: 'action',
          label: '操作'
        }
      ],
      isTablePagination: true,
      actions: [
        {
          key: 'status',
          label: '发布',
          title: '公告发布',
          type: 'primary',
          text: true,
          if: (item: Record<string, any>) => {
            return item.status === 2 || item.status === 4
          },
          apiKey: 'statusUpdateApi',
          modalWidth: '500px',
          interactionType: InteractionType.CONFIRM,
          content: '你确定发布该条公告吗？',
          onCallback: ['search', 'message'],
          formCancleButton: {
            key: 'cancel',
            label: '取消',
            type: ''
          },
          formActions: [
            {
              key: 'confirm',
              label: '确定',
              type: 'primary'
            }
          ]
        },
        {
          key: 'withdraw',
          label: '撤回',
          type: 'primary',
          text: true,
          if: (item: Record<string, any>) => {
            return item.status === 1
          },
          apiKey: 'statusUpdateApi',
          modalWidth: '500px',
          interactionType: InteractionType.CONFIRM,
          title: '公告撤回',
          content: '你确定撤回该条公告吗？',
          onCallback: ['search', 'message'],
          formCancleButton: {
            key: 'cancel',
            label: '取消',
            type: ''
          },
          formActions: [
            {
              key: 'confirm',
              label: '确定',
              type: 'primary'
            }
          ]
        },
        {
          key: 'delete',
          label: '删除',
          type: 'primary',
          text: true,
          if: (item: Record<string, any>) => {
            return item.status === 2
          },
          apiKey: 'delApi',
          modalWidth: '500px',
          interactionType: InteractionType.CONFIRM,
          title: '提示',
          content: '你确定删除该条公告吗？',
          formCancleButton: {
            key: 'cancel',
            label: '取消',
            type: ''
          },
          formActions: [
            {
              key: 'confirm',
              label: '确定',
              type: 'primary'
            }
          ]
        },
        {
          key: 'edit',
          label: '编辑',
          title: '公告编辑',
          type: 'primary',
          formKey: 'editForm',
          text: true,
          modalWidth: '800px',
          interactionType: InteractionType.POPUP,
          apiKey: 'updateApi',
          formCancleButton: {
            key: 'cancel',
            label: '取消',
            type: ''
          },
          formActions: [
            {
              key: 'confirm',
              label: '确定',
              type: 'primary'
            }
          ]
        }
      ]
    },
    apis: {
      searchApi: {
        key: 'searchApi',
        path: '/api/pwm/v1/AdminAnnounceListInquiry',
        handleParams: (params: Record<string, any>) => {
          params.page.orderBy = 'id DESC'
          return params
        }
      },
      addApi: {
        key: 'addApi',
        path: '/api/pwm/v1/AdminAnnounceAddition',
        handleParams: (params: any) => {
          params.deadline = parseTime(params.deadline, '{y}-{m}-{d} {h}:{i}:{s}')
          const target = {
            ...params,
            status: 1
          }
          return target
        }
      },
      addUnpublishApi: {
        key: 'addUnpublishApi',
        path: '/api/pwm/v1/AdminAnnounceAddition',
        handleParams: (params: any) => {
          params.deadline = parseTime(params.deadline, '{y}-{m}-{d} {h}:{i}:{s}')
          const target = {
            ...params,
            status: 2
          }
          return target
        }
      },
      statusUpdateApi: {
        key: 'statusUpdateApi',
        path: '/api/pwm/v1/AdminAnnounceStatusMaintenance',
        handleParams: (row: any) => {
          const status = row.status === 2 || row.status === 4 ? 1 : 4
          return { id: row.id, status: status }
        }
      },
      updateApi: {
        key: 'updateApi',
        path: '/api/pwm/v1/AdminAnnounceMaintenance',
        handleParams: (params: any) => {
          params.deadline = parseTime(params.deadline, '{y}-{m}-{d} {h}:{i}:{s}')
          return params
        }
      },
      delApi: {
        key: 'delApi',
        path: '/api/pwm/v1/AdminAnnounceDeleting',
        handleParams: (row: any) => {
          return { id: row.id }
        }
      }
    },
    variables: {
      statusVariable: {
        key: 'statusVariable',
        value: [
          { label: '已发布', value: 1 },
          { label: '未发布', value: 2 },
          { label: '已撤回', value: 4 }
        ]
      }
    }
  }

  return {
    tablePageConfig
  }
}
