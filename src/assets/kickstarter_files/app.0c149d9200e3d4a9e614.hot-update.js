webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Signup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Signup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"signup\",\n  components: {},\n  data: function data() {\n    return {\n      user: []\n    };\n  },\n  mounted: function mounted() {},\n  methods: {\n    processForm: function processForm() {\n      var _this = this;\n\n      var user = {\n        password: this.password,\n        email: this.email,\n        first_name: this.first_name,\n        last_name: this.last_name,\n        address: this.address\n      };\n      console.log('super', user);\n      alert('Processing!');\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"http://localhost:3000/api/v1/users\").then(function (response) {\n        var user = user;\n        console.log('yoloooooooooo', data);\n        _this.project = data;\n        console.log('nihao', _this.project);\n      });\n    }\n  }\n}); //   submitEntry: function() {\n//         this.ajaxRequest = true;\n//         this.$http.post('http://localhost:3000/entry', {\n//               fname: this.fname,\n//               lname: this.lname,\n//               age: this.age\n//             }, function (data, status, request) {\n//                 this.postResults = data;\n//                 this.ajaxRequest = false;\n//             });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL1NpZ251cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1NpZ251cC52dWU/MjFmYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwic2lnbnVwXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLW5vbmUgZC1tZC1mbGV4IGNvbC1tZC00IGNvbC1sZy02IGJnLWltYWdlXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbGctNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBweS01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05IGNvbC1sZy04IG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJsb2dpbi1oZWFkaW5nIG1iLTRcIj5XZWxjb21lITwvaDM+XG5cblxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPSdzaWdudXAtZm9ybScgQHN1Ym1pdC5wcmV2ZW50PVwicHJvY2Vzc0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWwtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmaXJzdF9uYW1lXCIgbmFtZT1cImZpcnN0X25hbWVcIiB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRGaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiIHJlcXVpcmVkIGF1dG9mb2N1cz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0Rmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwibGFzdF9uYW1lXCIgbmFtZT1cImxhc3RfbmFtZVwidHlwZT1cInRleHRcIiBpZD1cImlucHV0TGFzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgcmVxdWlyZWQgYXV0b2ZvY3VzPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRMYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiYWRkcmVzc1wiIG5hbWU9XCJhZGRyZXNzXCIgdHlwZT1cInRleHRcIiBpZD1cImlucHV0QWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgcmVxdWlyZWQgYXV0b2ZvY3VzPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRBZGRyZXNzXCI+QWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBpZD1cImlucHV0RW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIHJlcXVpcmVkIGF1dG9mb2N1cz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RW1haWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWwtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dFBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImN1c3RvbUNoZWNrMVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImN1c3RvbUNoZWNrMVwiPlJlbWVtYmVyIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tbG9naW4gdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZCBtYi0yXCIgdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic21hbGxcIiBocmVmPVwiI1wiPkZvcmdvdCBwYXNzd29yZD88L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInNpZ251cFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgXG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgIHVzZXI6IFtdXG5cbiAgICB9O1xuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICBcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgICAgcHJvY2Vzc0Zvcm06IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICBsZXQgdXNlciA9IHsgXG4gICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCwgXG4gICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCAsIFxuICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5maXJzdF9uYW1lLCBcbiAgICAgICAgICAgICAgIGxhc3RfbmFtZTogdGhpcy5sYXN0X25hbWUsIFxuICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgY29uc29sZS5sb2coJ3N1cGVyJywgdXNlcilcbiAgICAgIGFsZXJ0KCdQcm9jZXNzaW5nIScpO1xuICAgICAgIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvdXNlcnNgKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygneW9sb29vb29vb29vbycsZGF0YSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3QgPSBkYXRhIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduaWhhbycsdGhpcy5wcm9qZWN0KVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyAgIHN1Ym1pdEVudHJ5OiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgdGhpcy5hamF4UmVxdWVzdCA9IHRydWU7XG4vLyAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2VudHJ5Jywge1xuLy8gICAgICAgICAgICAgICBmbmFtZTogdGhpcy5mbmFtZSxcbi8vICAgICAgICAgICAgICAgbG5hbWU6IHRoaXMubG5hbWUsXG4vLyAgICAgICAgICAgICAgIGFnZTogdGhpcy5hZ2Vcbi8vICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIHJlcXVlc3QpIHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnBvc3RSZXN1bHRzID0gZGF0YTtcblxuLy8gICAgICAgICAgICAgICAgIHRoaXMuYWpheFJlcXVlc3QgPSBmYWxzZTtcbi8vICAgICAgICAgICAgIH0pO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuOnJvb3Qge1xuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xuICAtLWlucHV0LXBhZGRpbmcteTogMC43NXJlbTtcbn1cblxuLmxvZ2luLFxuLmltYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5iZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL1dFUWJlMmpCZzQwLzYwMHgxMjAwJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYnRuLWxvZ2luIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBjdXJzb3I6IHRleHQ7XG4gIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFqQkE7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Signup.vue?vue&type=script&lang=js&\n");

/***/ })

})