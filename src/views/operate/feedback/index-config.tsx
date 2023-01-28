import { parseTime } from '@/utils'
import { FormItemType, HandleType, InteractionType, LabelType, TablePageConfig } from '@gwin/admin-ui'
import { useRoute } from 'vue-router'
export default function indexConfig() {
  const route = useRoute()

  const tablePageConfig: TablePageConfig = {
    forms: {
      searchForm: [
        {
          key: 'content',
          type: FormItemType.INPUT,
          data: {
            placeholder: '请输入反馈内容'
          }
        },
        {
          key: 'category',
          type: FormItemType.SELECT,
          data: {
            placeholder: '请选择反馈类型',
            clearable: true
          },
          isGetOptionsFromVariable: true,
          getOptionsFromVariables: {
            variableKey: 'categoryVariable'
          }
        },
        {
          key: 'status',
          type: FormItemType.SELECT,
          data: {
            placeholder: '请选择反馈状态',
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
      editForm: [
        {
          key: 'category',
          label: '反馈类型',
          labelType: LabelType.NORMAL,
          type: FormItemType.RENDER,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          data: {
            value: ''
          }
        },
        {
          key: 'content',
          label: '反馈内容',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          }
        },
        {
          key: 'createAt',
          label: '提交时间',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          },
          handleItemSetValue: (key, value) => {
            return parseTime(value, '{y}-{m}-{d} {h}:{i}:{s}')
          }
        },
        {
          key: 'userRealName',
          label: '提交人',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          }
        },
        {
          key: 'userMobile',
          label: '提交人电话',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          }
        },
        {
          key: 'status',
          label: '处理状态',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          },
          isGetOptionsFromVariable: true,
          getOptionsFromVariables: {
            variableKey: 'statusVariable'
          }
        },
        {
          key: 'result',
          label: '处理结果',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.INPUT,
          required: true,
          data: {
            type: 'textarea',
            autosize: { minRows: 2 },
            style: {
              width: '500px !important'
            },
            maxlength: 100,
            'show-word-limit': true
          }
        }
      ],
      detailForm: [
        {
          key: 'category',
          label: '反馈类型',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          }
        },
        {
          key: 'content',
          label: '反馈内容',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          }
        },
        {
          key: 'createAt',
          label: '提交时间',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          },
          handleItemSetValue: (key, value) => {
            return parseTime(value, '{y}-{m}-{d} {h}:{i}:{s}')
          }
        },
        {
          key: 'userRealName',
          label: '提交人',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          }
        },
        {
          key: 'userMobile',
          label: '提交人电话',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          }
        },
        {
          key: 'status',
          label: '处理状态',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          },
          isGetOptionsFromVariable: true,
          getOptionsFromVariables: {
            variableKey: 'statusVariable'
          }
        },
        {
          key: 'result',
          label: '处理结果',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          },
          handleItemSetValue: (key, value) => {
            return value || '--'
          }
        },
        {
          key: 'completeTime',
          label: '处理时间',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          },
          handleItemSetValue: (key, value) => {
            return value === null ? '--' : parseTime(value, '{y}-{m}-{d} {h}:{i}:{s}')
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
      }
    ],
    tableConfig: {
      columns: [
        {
          prop: 'category',
          label: '反馈类型',
          showOverflowTooltip: false
        },
        {
          prop: 'content',
          label: '反馈内容',
          showOverflowTooltip: true
        },
        {
          prop: 'createAt',
          label: '提交时间',
          showOverflowTooltip: false,
          handleType: HandleType.TIME
        },
        {
          prop: 'userRealName',
          label: '提交人',
          showOverflowTooltip: false
        },
        {
          prop: 'userMobile',
          label: '提交人电话',
          showOverflowTooltip: false
        },
        {
          prop: 'result',
          label: '处理结果',
          showOverflowTooltip: true,
          tsx: (ctx, scope) => {
            return scope.row[scope.column.property] ? scope.row[scope.column.property] : '-'
          }
        },
        {
          prop: 'status',
          label: '处理状态',
          showOverflowTooltip: false,
          variableMap: { variableKey: 'statusVariable' }
        },
        {
          prop: 'completeTime',
          label: '处理时间',
          showOverflowTooltip: false,
          tsx: (ctx, scope) => {
            return scope.row[scope.column.property]
              ? parseTime(scope.row[scope.column.property], '{y}-{m}-{d} {h}:{i}:{s}')
              : '-'
          }
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
          label: '处理',
          type: 'primary',
          title: '反馈处理',
          text: true,
          if: (item: Record<string, any>) => {
            return item.status === 1
          },
          formKey: 'editForm',
          apiKey: 'statusUpdateApi',
          modalWidth: '800px',
          interactionType: InteractionType.POPUP,
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
          key: 'detail',
          label: '详情',
          title: '反馈详情',
          type: 'primary',
          formKey: 'detailForm',
          text: true,
          modalWidth: '800px',
          interactionType: InteractionType.POPUP,
          formCancleButton: {
            key: 'cancel',
            label: '关闭',
            type: ''
          }
        }
      ]
    },
    apis: {
      searchApi: {
        key: 'searchApi',
        path: '/api/pwm/v1/AdminFeedbackListInquiry',
        handleParams: (params: Record<string, any>) => {
          if (route.query.id) {
            params.id = route.query.id
          }
          params.page.orderBy = 'pfm.id DESC'
          return params
        }
      },
      statusUpdateApi: {
        key: 'statusUpdateApi',
        path: '/api/pwm/v1/AdminFeedbackMaintenance',
        handleParams: (row: any) => {
          return { id: row.id, result: row.result }
        }
      }
    },
    variables: {
      categoryVariable: {
        key: 'categoryVariable',
        value: [
          { label: '地址错误', value: '地址错误' },
          { label: '名称错误', value: '名称错误' },
          { label: '设备损坏', value: '设备损坏' },
          { label: '其他', value: '其他' }
        ]
      },
      statusVariable: {
        key: 'statusVariable',
        value: [
          { label: '未处理', value: 1 },
          { label: '已处理', value: 2 }
        ]
      }
    }
  }

  return {
    tablePageConfig
  }
}
