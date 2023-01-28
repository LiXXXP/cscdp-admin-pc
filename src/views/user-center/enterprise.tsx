export const enterpriseState = {
  tablePageConfig: {
    forms: {
      searchForm: [
        {
          key: 'name',
          label: '',
          labelType: 'Normal',
          type: 'Input',
          data: {
            placeholder: '请输入企业名称'
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'contact',
          label: '',
          labelType: 'Normal',
          type: 'Input',
          data: {
            placeholder: '请输入联系人/联系电话'
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'category',
          label: '',
          labelType: 'Normal',
          type: 'Input',
          data: {
            placeholder: '请输入企业类型'
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'time',
          label: '',
          labelType: 'Normal',
          type: 'DatePicker',
          data: {
            style: {
              width: '280px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          handleKey: 'datetime',
          handleValue: ['startDate', 'endDate']
        }
      ],
      createForm: [
        {
          key: 'b24920ab-ec06-4a06-bbc1-01d41445ddf9',
          label: '企业信息',
          labelType: 'Normal',
          type: 'Render',
          labelStyle: {
            'font-weight': 600
          },
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'name',
          label: '企业名称',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            type: 'text',
            'show-word-limit': true,
            maxlength: '100',
            value: '',
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          rules: [{ pattern: /^[^\s]*$/, message: '不能输入空格' }]
        },
        {
          key: 'category',
          label: '企业类型',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            type: 'text',
            'show-word-limit': true,
            maxlength: '20',
            value: '',
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          rules: [{ pattern: /^[^\s]*$/, message: '不能输入空格' }]
        },
        {
          key: 'industry',
          label: '行业',
          labelType: 'Normal',
          type: 'Cascader',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            props: {
              multiple: false
            },
            'show-all-levels': true,
            style: {
              width: '400px !important'
            }
          },
          required: true,
          getOptionsFromApi: {
            apiKey: 'industryApi',
            valueKey: 'value',
            labelKey: 'label',
            isMountedGet: true
          },
          isGetOptionsFromApi: true
        },
        {
          key: 'scale',
          label: '规模',
          labelType: 'Normal',
          type: 'Select',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            options: [
              {
                value: 1,
                label: '1-9人'
              },
              {
                value: 2,
                label: '10-99人'
              },
              {
                value: 3,
                label: '100-999人'
              },
              {
                value: 4,
                label: '1000-9999人'
              },
              {
                value: 5,
                label: '10000-99999人'
              },
              {
                value: 6,
                label: '100000人以上'
              }
            ],
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {
            variableKey: 'scaleList',
            valueKey: 'value',
            labelKey: 'label'
          },
          getOptionsFromParent: {},
          isGetOptionsFromVariable: true
        },
        {
          key: 'licenseUri',
          label: '营业执照',
          labelType: 'Normal',
          type: 'Upload',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            accept: 'image/*',
            limit: 1,
            listType: 'picture',
            fileType: 'jpeg',
            multiple: true,
            sizeLimit: 1
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'fixedTelephone',
          label: '座机',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          rules: [
            {
              pattern: /^(|[1-9][0-9]*)$/,
              message: '请输入正确的座机号'
            }
          ]
        },
        {
          key: 'district',
          label: '地区',
          labelType: 'Normal',
          type: 'Cascader',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            props: {
              multiple: false
            },
            'show-all-levels': true,
            style: {
              width: '400px !important'
            },
            clearable: true
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {
            apiKey: 'districtApi',
            key: 'districtApi',
            path: '/api/pwm/v1/RegionListInquiry',
            method: 'post',
            config: {
              type: 'admin'
            },
            valueKey: 'value',
            labelKey: 'label',
            isMountedGet: true
          },
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          isGetOptionsFromApi: true
        },
        {
          key: 'postCode',
          label: '邮编',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            value: '',
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          rules: [
            {
              pattern: /^[0-9]{6}$/,
              message: '请输入正确的邮编'
            }
          ]
        },
        {
          key: 'address',
          label: '地址',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            type: 'text',
            'show-word-limit': true,
            maxlength: '100',
            value: '',
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          rules: [{ pattern: /^[^\s]*$/, message: '不能输入空格' }]
        },
        {
          key: 'memo',
          label: '企业描述',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            type: 'textarea',
            'show-word-limit': true,
            maxlength: '200',
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: '0fd05feb-9c8b-4367-af75-9b45422461f3',
          label: '联系人信息',
          labelType: 'Normal',
          type: 'Render',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'contactName',
          label: '联系人姓名',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            type: 'text',
            'show-word-limit': true,
            maxlength: '50',
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          rules: [{ pattern: /^[^\s]*$/, message: '不能输入空格' }]
        },
        {
          key: 'contactMobile',
          label: '联系人手机号',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            value: '',
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          rules: [
            {
              pattern: /^1[3|4|5|7|8]\d{9}$/,
              message: '请输入正确的手机号'
            }
          ]
        },
        {
          key: 'contactEmail',
          label: '联系人邮箱',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            value: '',
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          rules: [
            {
              pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
              message: '请输入正确的邮箱'
            }
          ]
        }
      ]
    },
    apis: {
      searchApi: {
        key: 'searchApi',
        path: '/api/pwm/v1/AdminEnterpriseListInquiry',
        method: 'post',
        config: {
          type: 'admin'
        },
        isLoading: true,
        isMessage: false,
        mock: '',
        handleParams: (params: Record<string, any>) => {
          params.page.orderBy = 'pem.id DESC'
          return params
        }
      },
      detailApi: {
        key: 'detailApi',
        path: '/api/pwm/v1/AdminEnterpriseInquiry',
        method: 'post',
        config: {
          type: 'admin'
        },
        mock: '',
        handleParams: '(\r\n   () => {\r\n      return {\r\n        id: params.id\r\n      }\r\n    }\r\n)()',
        handleResult: (body: Record<string, any>) => {
          if (body.licenseUri) {
            body.licenseUri = [{ url: body.licenseUri }]
          }
          return body
        }
      },
      createAPI: {
        key: 'createAPI',
        path: '/api/pwm/v1/AdminEnterpriseAddition',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: (params: Record<string, any>) => {
          const targetParams = {
            ...params,
            licenseUri: params.licenseUri ? params.licenseUri[0].url : ''
          }
          return targetParams
        }
      },
      industryApi: {
        key: 'industryApi',
        path: '/api/pwm/v1/AdminIndustryListInquiry',
        method: 'post',
        config: {
          type: 'admin'
        }
      },
      districtApi: {
        key: 'districtApi',
        path: '/api/pwm/v1/RegionListInquiry',
        method: 'post',
        config: {
          type: 'admin'
        }
      },
      enterpriseMaintenanceApi: {
        key: 'enterpriseMaintenanceApi',
        path: '/api/pwm/v1/AdminEnterpriseMaintenance',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: (params: Record<string, any>) => {
          const targetParams = {
            ...params,
            licenseUri: params.licenseUri?.length > 0 ? params.licenseUri[0].url : ''
          }
          return targetParams
        }
      },
      deleteApi: {
        key: 'deleteApi',
        path: '/api/pwm/v1/AdminEnterpriseDeleting',
        method: 'post',
        config: {
          type: 'admin'
        },
        isLoading: true,
        isMessage: true,
        handleParams: '(() => {\n  return {\n    id: params.id\n  }\n})()'
      }
    },
    variables: {
      scaleList: {
        key: 'scaleList',
        value: [
          {
            value: '1',
            label: '1-9人'
          },
          {
            value: '2',
            label: '10-99人'
          },
          {
            value: '3',
            label: '100-999人'
          },
          {
            value: '4',
            label: '1000-9999人'
          },
          {
            value: '5',
            label: '10000-99999人'
          },
          {
            value: '6',
            label: '100000人以上'
          }
        ]
      }
    },
    buttonGroup: [
      {
        key: 'reset',
        label: '重置',
        text: true,
        type: 'primary',
        size: 'default'
      },
      {
        key: 'search',
        label: '查询',
        text: false,
        type: '',
        style: {
          color: '#3860f4',
          'border-color': '#3860f4'
        },
        size: 'default'
      },
      {
        key: 'create',
        label: '新增',
        text: false,
        type: 'primary',
        size: 'default',
        interactionType: 'popup',
        modalWidth: '800px',
        formKey: 'createForm',
        dataSourceApiKey: '',
        apiKey: 'createAPI',
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
    tableConfig: {
      columns: [
        {
          prop: 'name',
          label: '企业名称',
          variableMap: {},
          showOverflowTooltip: true
        },
        {
          prop: 'contactName',
          label: '联系人',
          variableMap: {}
        },
        {
          prop: 'contactMobile',
          label: '联系电话',
          variableMap: {}
        },
        {
          prop: 'industryName',
          label: '行业',
          variableMap: {}
        },
        {
          prop: 'scale',
          label: '规模',
          variableMap: {
            variableKey: 'scaleList',
            valueKey: 'value',
            labelKey: 'label'
          }
        },
        {
          prop: 'category',
          label: '企业类型',
          variableMap: {}
        },
        {
          prop: 'createAt',
          label: '创建时间',
          variableMap: {},
          handleType: 'time'
        },
        {
          prop: 'action',
          label: '操作',
          variableMap: {}
        }
      ],
      actions: [
        {
          key: 'edit',
          label: '编辑',
          text: true,
          type: 'primary',
          interactionType: 'popup',
          onCallback: ['search', 'message'],
          size: 'default',
          title: '企业编辑',
          modalWidth: '800px',
          fullscreen: true,
          dataSourceApiKey: 'detailApi',
          apiKey: 'enterpriseMaintenanceApi',
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
          text: true,
          type: 'primary',
          interactionType: 'confirm',
          onCallback: ['search', 'message'],
          size: 'default',
          title: '企业删除',
          content: '确定将删除此企业吗？',
          modalWidth: '500px',
          apiKey: 'deleteApi',
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
      config: '',
      isTablePagination: true
    },
    isMountedSearch: true
  }
}
