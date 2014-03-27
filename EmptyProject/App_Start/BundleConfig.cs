using System.Web;
using System.Web.Optimization;

namespace EmptyProject
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.IgnoreList.Ignore("*.min.js");
#if RELEASE
            bundles.IgnoreList.Ignore("*.spec.js");
#endif
            bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/toastr.js")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-animate.js")
                .Include("~/Scripts/angular-cookies.js")
                .Include("~/Scripts/angular-loader.js")
                .Include("~/Scripts/angular-mock.js")
                .Include("~/Scripts/angular-resource.js")
                .Include("~/Scripts/angular-route.js")
                .Include("~/Scripts/angular-sanitize.js")
                .Include("~/Scripts/angular-scenario.js")
                .Include("~/Scripts/angular-touch.js")
                .Include("~/Scripts/i18n/angular-locale_ru.js")
                .Include("~/App/app.js")
                .IncludeDirectory("~/App/Shared/Services", "*.js", false)
                .IncludeDirectory("~/App/Shared/controllers", "*.js", false)
                .IncludeDirectory("~/App/Test", "*.js", false)
                .IncludeDirectory("~/App/sampleEntity", "*.js", false)


               );

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/toastr.css",
                      "~/Content/site.css"));
        }
    }
}
