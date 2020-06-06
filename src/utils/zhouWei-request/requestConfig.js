import request from "./request";
// 全局配置的请求域名
let baseUrl = "http://www.xxx.com/api/";
//可以new多个request来支持多个域名请求
let $http = new request({
  //接口请求地址
  baseUrl: baseUrl,
  //服务器本地上传文件地址
  fileUrl: baseUrl,
  //设置请求头（如果使用报错跨域问题，可能是content-type请求类型和后台那边设置的不一致）
  header: {
    "content-type": "application/json;charset=UTF-8",
  },
  //以下是默认值可不写
  //是否提示--默认提示
  isPrompt: true,
  //是否显示请求动画
  load: true,
  //是否使用处理数据模板
  isFactory: true,
});

// 添加获取七牛云token的方法
$http.getQnToken = function(callback) {
  //该地址需要开发者自行配置（每个后台的接口风格都不一样）
  $http.get("api/kemean/aid/qn_upload").then((data) => {
    /*
     *接口返回参数：
     *visitPrefix:访问文件的域名
     *token:七牛云上传token
     *folderPath:上传的文件夹
     */
    callback({
      visitPrefix: data.visitPrefix,
      token: data.token,
      folderPath: data.folderPath,
    });
  });
};

//当前接口请求数
let requestNum = 0;
//请求开始拦截器
$http.requestStart = function(options) {
  if (options.load) {
    if (requestNum <= 0) {
      // //打开加载动画
      // uni.showLoading({
      //   title: "加载中",
      //   mask: true,
      // });
    }
    requestNum += 1;
  }
  // 图片上传大小限制
  if (options.method == "FILE" && options.maxSize) {
    // 文件最大字节: options.maxSize 可以在调用方法的时候加入参数
    maxSize = options.maxSize;
    for (let item of options.files) {
      if (item.size > maxSize) {
        setTimeout(() => {
          uni.showToast({
            title: "图片过大，请重新上传",
            icon: "none",
          });
        }, 500);
        return false;
      }
    }
  }
  //请求前加入token
  options.header["token"] = "1234568";
  return options;
};
//请求结束
$http.requestEnd = function(options, resolve) {
  //判断当前接口是否需要加载动画
  if (options.load) {
    requestNum = requestNum - 1;
    if (requestNum <= 0) {
      uni.hideLoading();
    }
  }
  if (resolve.errMsg && resolve.statusCode && resolve.statusCode > 300) {
  }
};
//登录弹窗次数
let loginPopupNum = 0;
//所有接口数据处理（可在接口里设置不调用此方法）
//此方法需要开发者根据各自的接口返回类型修改，以下只是模板
$http.dataFactory = function(res) {
  // 判断接口请求是否成功
  if (res.response.statusCode && res.response.statusCode == 200) {
    let httpData = res.response.data;
    /*********以下只是模板(及共参考)，需要开发者根据各自的接口返回类型修改*********/

    //判断数据是否请求成功
    if (httpData.success) {
      // 返回正确的结果(then接受数据)
      res.resolve(httpData);
    } else if (httpData.code == "1000" || httpData.code == "1001") {
      //未登录或登录已失效
      if (loginPopupNum <= 0) {
        loginPopupNum++;
        uni.showModal({
          title: "温馨提示",
          content: "此时此刻需要您登录喔~",
          confirmText: "去登录",
          cancelText: "再逛会",
          success: (res2) => {
            loginPopupNum--;
            if (res2.confirm) {
              uni.navigateTo({
                url: "'/pages/login",
              });
            }
          },
        });
      }
      // 返回错误的结果(catch接受数据)
      res.reject(res.response);
    } else {
      //其他错误提示
      if (res.isPrompt) {
        //设置可以提示的时候
        setTimeout(function() {
          uni.showToast({
            title: httpData.info, //提示后台接口抛出的错误信息
            icon: "none",
            duration: 3000,
          });
        }, 500);
      }
      // 返回错误的结果(catch接受数据)
      res.reject(res.response);
    }

    /*********以上只是模板(及共参考)，需要开发者根据各自的接口返回类型修改*********/
  } else {
    // 返回错误的结果(catch接受数据)
    res.reject(res.response);
  }
};
export default $http;
