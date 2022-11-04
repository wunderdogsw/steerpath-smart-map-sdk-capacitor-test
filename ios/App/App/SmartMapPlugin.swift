import Capacitor
import SteerpathSmartSDK

@objc(SmartMapPlugin)
public class SmartMapPlugin: CAPPlugin {
    private var vc: UIViewController!
    private var isVisible: Bool = false
    
    override public func load() {
        let storyboard = UIStoryboard(name: "SmartMap", bundle: nil)
        self.vc = storyboard.instantiateViewController(withIdentifier: "BasicMap")
    }

    @objc func startWithConfig(_ call: CAPPluginCall) {
        let apiKey = call.getString("apiKey") ?? ""
        let configFilePath = call.getString("configFilePath") ?? ""
        SPSmartSDK.getInstance().start(apiKey, config:configFilePath)
        call.resolve()
    }
    
    @objc func show(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.bridge?.viewController?.present(self.vc, animated: true, completion: nil)
            self.isVisible = true
            call.resolve()
        }
    }

    @objc func hide(_ call: CAPPluginCall) {
        if !isVisible { return }
        DispatchQueue.main.async {
            self.vc.dismiss(animated: true, completion: nil)
            self.isVisible = false
            call.resolve()
        }
    }}
