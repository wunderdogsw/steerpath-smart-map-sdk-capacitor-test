#import <Capacitor/Capacitor.h>

CAP_PLUGIN(SmartMapPlugin, "SmartMap",
           CAP_PLUGIN_METHOD(startWithConfig, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(show, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(hide, CAPPluginReturnPromise);
)
