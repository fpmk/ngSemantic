System.register(["angular2/core", "angular2/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/popup", "./elements/tab", "./elements/button", "./elements/card", "./elements/form", "./elements/sidebar"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, loader_1, list_1, segment_1, menu_1, message_1, modal_1, popup_1, tab_1, button_1, card_1, form_1, sidebar_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (segment_1_1) {
                segment_1 = segment_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (popup_1_1) {
                popup_1 = popup_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    jQuery("#page .full.height").css("height", jQuery(window).height() + "px");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app"
                    }),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: "./app/components/app.html"
                    }),
                    router_1.RouteConfig([
                        { component: home_1.HomeComponent, path: "/", useAsDefault: true },
                        { component: loader_1.LoaderComponent, path: "/elements/loader" },
                        { component: list_1.ListComponent, path: "/elements/list" },
                        { component: form_1.FormComponent, path: "/elements/form" },
                        { component: card_1.CardComponent, path: "/elements/card" },
                        { component: segment_1.SegmentComponent, path: "/elements/segment" },
                        { component: menu_1.MenuComponent, path: "/elements/menu" },
                        { component: message_1.MessageComponent, path: "/elements/message" },
                        { component: modal_1.ModalComponent, path: "/elements/modal" },
                        { component: popup_1.PopupComponent, path: "/elements/popup" },
                        { component: sidebar_1.SidebarComponent, path: "/elements/sidebar" },
                        { component: tab_1.TabComponent, path: "/elements/tab" },
                        { component: button_1.ButtonComponent, path: "/elements/button" },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUFBO2dCQTJCQUMsQ0FBQ0E7Z0JBSEFELHNDQUFlQSxHQUFmQTtvQkFDQ0UsTUFBTUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDNUVBLENBQUNBO2dCQTFCRkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsS0FBS0E7cUJBQ2ZBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTt3QkFDL0JBLFdBQVdBLEVBQUVBLDJCQUEyQkE7cUJBQ3hDQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxTQUFTQSxFQUFFQSxvQkFBYUEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7d0JBQzNEQSxFQUFFQSxTQUFTQSxFQUFFQSx3QkFBZUEsRUFBRUEsSUFBSUEsRUFBRUEsa0JBQWtCQSxFQUFFQTt3QkFDeERBLEVBQUVBLFNBQVNBLEVBQUVBLG9CQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxnQkFBZ0JBLEVBQUVBO3dCQUNwREEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQWFBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsRUFBRUE7d0JBQ3BEQSxFQUFFQSxTQUFTQSxFQUFFQSxvQkFBYUEsRUFBRUEsSUFBSUEsRUFBRUEsZ0JBQWdCQSxFQUFFQTt3QkFDcERBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFnQkEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQTt3QkFDMURBLEVBQUVBLFNBQVNBLEVBQUVBLG9CQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxnQkFBZ0JBLEVBQUVBO3dCQUNwREEsRUFBRUEsU0FBU0EsRUFBRUEsMEJBQWdCQSxFQUFFQSxJQUFJQSxFQUFFQSxtQkFBbUJBLEVBQUVBO3dCQUMxREEsRUFBRUEsU0FBU0EsRUFBRUEsc0JBQWNBLEVBQUVBLElBQUlBLEVBQUVBLGlCQUFpQkEsRUFBRUE7d0JBQ3REQSxFQUFFQSxTQUFTQSxFQUFFQSxzQkFBY0EsRUFBRUEsSUFBSUEsRUFBRUEsaUJBQWlCQSxFQUFFQTt3QkFDdERBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFnQkEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQTt3QkFDMURBLEVBQUVBLFNBQVNBLEVBQUVBLGtCQUFZQSxFQUFFQSxJQUFJQSxFQUFFQSxlQUFlQSxFQUFFQTt3QkFDbERBLEVBQUVBLFNBQVNBLEVBQUVBLHdCQUFlQSxFQUFFQSxJQUFJQSxFQUFFQSxrQkFBa0JBLEVBQUVBO3FCQUN4REEsQ0FBQ0E7O2lDQU1EQTtnQkFBREEsbUJBQUNBO1lBQURBLENBQUNBLEFBM0JELElBMkJDO1lBM0JELHVDQTJCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZyB9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZVwiO1xuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbG9hZGVyXCI7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbGlzdFwiO1xuaW1wb3J0IHsgU2VnbWVudENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3NlZ21lbnRcIjtcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tZW51XCI7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvbWVzc2FnZVwiO1xuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgUG9wdXBDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9wb3B1cFwiO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvdGFiXCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9idXR0b25cIjtcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9jYXJkXCI7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvZm9ybVwiO1xuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3NpZGViYXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImFwcFwiXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2FwcC9jb21wb25lbnRzL2FwcC5odG1sXCJcbn0pXG5AUm91dGVDb25maWcoW1xuXHR7IGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgcGF0aDogXCIvXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuXHR7IGNvbXBvbmVudDogTG9hZGVyQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9sb2FkZXJcIiB9LFxuXHR7IGNvbXBvbmVudDogTGlzdENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbGlzdFwiIH0sXG5cdHsgY29tcG9uZW50OiBGb3JtQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9mb3JtXCIgfSxcblx0eyBjb21wb25lbnQ6IENhcmRDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2NhcmRcIiB9LFxuXHR7IGNvbXBvbmVudDogU2VnbWVudENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvc2VnbWVudFwiIH0sXG5cdHsgY29tcG9uZW50OiBNZW51Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9tZW51XCIgfSxcblx0eyBjb21wb25lbnQ6IE1lc3NhZ2VDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21lc3NhZ2VcIiB9LFxuXHR7IGNvbXBvbmVudDogTW9kYWxDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21vZGFsXCIgfSxcblx0eyBjb21wb25lbnQ6IFBvcHVwQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9wb3B1cFwiIH0sXG5cdHsgY29tcG9uZW50OiBTaWRlYmFyQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9zaWRlYmFyXCIgfSxcblx0eyBjb21wb25lbnQ6IFRhYkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvdGFiXCIgfSxcblx0eyBjb21wb25lbnQ6IEJ1dHRvbkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvYnV0dG9uXCIgfSxcbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGpRdWVyeShcIiNwYWdlIC5mdWxsLmhlaWdodFwiKS5jc3MoXCJoZWlnaHRcIiwgalF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgKyBcInB4XCIpO1xuXHR9XG59XG4iXX0=