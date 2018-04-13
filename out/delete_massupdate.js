/**
 * Mass record deletion
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType MassUpdateScript
 */
define(["require", "exports", "N/runtime", "N/record", "N/log"], function (require, exports, runtime_1, record, log) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.each = function (params) {
        try {
            //Get halt switch
            var script = runtime_1.getCurrentScript();
            var halt = script.getParameter({ name: "custscript_mass_delete_halt" });
            if (!halt) {
                record.delete(params);
                log.audit("Deleted", params);
            }
        }
        catch (e) {
            log.error("each", e);
        }
    };
});
