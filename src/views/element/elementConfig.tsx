import { FormItemType, TablePageConfig, LabelType, InteractionType } from '@gwin/admin-ui'
import { ElMessage } from 'element-plus'
export default function elementConfig() {
  const tablePageConfig: TablePageConfig = {
    forms: {
      searchForm: [
        {
          key: 'category',
          type: FormItemType.SELECT,
          isGetOptionsFromApi: true,
          isGetOptionsFromVariable: true,
          getOptionsFromVariables: {
            variableKey: 'categoryVariable'
          },
          data: {
            placeholder: '请选择要素分类名称',
            clearable: true
          },
          subscribe: {
            key: 'appId',
            match: (subscriber, value) => {
              return value !== undefined && value !== ''
            },
            success: ['getOptions'],
            error: ['clear']
          }
        },
        {
          key: 'name',
          type: FormItemType.INPUT,
          data: {
            value: '',
            placeholder: '请输入要素名称'
          }
        },
        {
          key: 'status',
          type: FormItemType.SELECT,
          data: {
            placeholder: '请选择是否上架',
            clearable: true
          },
          isGetOptionsFromVariable: true,
          getOptionsFromVariables: {
            variableKey: 'statusVariable'
          }
        }
      ],
      importForm: [
        {
          key: 'upload',
          label: '上传文件',
          labelType: LabelType.NORMAL,
          type: FormItemType.UPLOAD,
          data: {
            accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
            limit: 1,
            files: [],
            listType: 'text',
            sizeLimit: 5,
            type: 'text',
            autoUpload: false,
            showFileList: true,
            style: {
              width: '400px'
            },
            buttonItem: {
              label: '选择文件',
              type: 'primary',
              size: 'default'
            }
          },
          required: true
        },
        {
          key: 'tips',
          label: '提示',
          labelType: LabelType.NORMAL,
          type: FormItemType.RENDER,
          data: {},
          isIgnore: true,
          render: () => {
            return `<div style="width: 500px">支持 .excel 格式，文件大小不超过5M，表格数据不超过500行，文件表头必须包括名称、坐标、是否上架等要素基础信息；</div><div style="width: 500px; color: #ff0000">注每次导入时的数据需为同一项目下同一个要素分类的内容！</div>`
          }
        }
      ],
      detailForm: [
        {
          key: 'category',
          label: '要素分类名称',
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
            variableKey: 'categoryVariable'
          }
        },
        {
          key: 'name',
          label: '要素名称',
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
          label: '是否上架',
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
          key: 'lng',
          label: '经度',
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
          key: 'lat',
          label: '纬度',
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
          key: 'address',
          label: '地址',
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
          key: 'contactInfo',
          label: '联系电话',
          labelType: LabelType.NORMAL,
          labelStyle: {
            'font-weight': 600,
            color: '#1A2234'
          },
          type: FormItemType.RENDER,
          data: {
            value: ''
          }
        }
        // {
        //   key: 'iconUri',
        //   label: '要素图标',
        //   labelType: LabelType.NORMAL,
        //   labelStyle: {
        //     'font-weight': 600,
        //     color: '#1A2234'
        //   },
        //   type: FormItemType.RENDER,
        //   data: {},
        //   render: (item: any) => {
        //     const url = item.data.value
        //     if (url) {
        //       return <img style="width:60px;" src={url} />
        //     } else {
        //       return '--'
        //     }
        //   }
        // }
      ]
    },
    buttonGroup: [
      {
        key: 'reset',
        label: '重置',
        icon: '',
        type: 'primary'
      },
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
        key: 'import',
        label: '导入',
        type: 'primary',
        interactionType: InteractionType.POPUP,
        title: '导入',
        modalWidth: '600px',
        formKey: 'importForm',
        apiKey: 'importApi',
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
        key: 'export',
        label: '导出',
        type: 'primary',
        beforeAction: (params: Record<string, any>) => {
          if (params.category === undefined || params.category === '') {
            ElMessage.error('请选择要素分类名称')
            return false
          }
          return true
        }
      }
    ],
    tableConfig: {
      columns: [
        { label: '序号', showOverflowTooltip: false, type: 'index', width: '100px', auto: false },
        {
          prop: 'category',
          label: '要素分类名称',
          showOverflowTooltip: false,
          auto: false,
          variableMap: {
            variableKey: 'categoryVariable'
          }
        },
        { prop: 'name', label: '要素名称', showOverflowTooltip: true, auto: false },
        {
          prop: 'status',
          label: '是否上架',
          showOverflowTooltip: false,
          auto: false,
          variableMap: {
            variableKey: 'statusVariable'
          }
        },
        { prop: 'lng', label: '经度', showOverflowTooltip: false, auto: false },
        { prop: 'lat', label: '纬度', showOverflowTooltip: false, auto: false },
        // {
        //   prop: 'iconUri',
        //   label: '要素图标',
        //   showOverflowTooltip: false,
        //   auto: false,
        //   // render: (value, row: any) => {
        //   //   return value === null ? '--' : row.iconUri
        //   // }
        //   tsx: (ctx, scope) => {
        //     const url = scope.row.iconUri
        //     if (url) {
        //       return <img style="width: 50px" src={url} />
        //     }
        //     return <div>--</div>
        //   }
        // },
        {
          prop: 'action',
          label: '操作',
          width: '120px'
        }
      ],
      actions: [
        {
          key: 'detail',
          label: '查看',
          type: 'primary',
          text: true,
          title: '要素详情',
          formKey: 'detailForm',
          dataSourceApiKey: 'detailApi',
          modalWidth: '800px',
          interactionType: InteractionType.POPUP,
          formCancleButton: {
            key: 'cancel',
            label: '关闭',
            type: ''
          }
        },
        {
          key: 'delete',
          label: '删除',
          type: 'primary',
          text: true,
          title: '要素删除',
          modalWidth: '500px',
          content: '要素删除后不可恢复，请确定是否删除',
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
      ],
      isTablePagination: true
    },
    apis: {
      searchApi: {
        key: 'searchApi',
        path: '/api/pwm/v1/AdminWelfareListInquiry',
        handleParams: (params) => {
          params.page.orderBy = 'id DESC'
          return params
        }
      },
      deleteApi: {
        key: 'deleteApi',
        path: '/api/pwm/v1/AdminWelfareDeleting',
        handleParams: (item: any) => {
          return {
            id: item.id
          }
        }
      },
      exportApi: {
        key: 'exportApi',
        path: '/api/pwm/v1/AdminWelfareExport',
        isMessage: true,
        config: {
          responseType: 'blob'
        },
        handleParams: (item: any) => {
          return {
            category: item.category,
            name: item.name,
            status: item.status
          }
        },
        error: () => {
          ElMessage.error('导出失败')
        }
      },
      importApi: {
        key: 'importApi',
        path: '/api/pwm/v1/AdminWelfareImport',
        isMessage: true,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          responseType: 'blob'
        },
        handleParams: (params) => {
          const rawFile = params.upload[0].raw
          const formData = new FormData()
          formData.append('file', rawFile)
          formData.append('entityId', 'pwm')
          return formData
        }
      },
      detailApi: {
        key: 'detailApi',
        path: '/api/pwm/v1/AdminWelfareInquiry'
      }
    },
    variables: {
      statusVariable: {
        key: 'statusVariable',
        value: [
          { label: '上架', value: 1 },
          { label: '下架', value: 2 }
        ]
      },
      categoryVariable: {
        key: 'categoryVariable',
        value: [
          { label: '捐助点', value: 1 },
          { label: 'AED', value: 2 }
        ]
      }
    }
  }
  return {
    tablePageConfig
  }
}
