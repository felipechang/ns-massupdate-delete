/**
 * Mass record deletion
 *
 * @author Felipe Chang <felipechang@hardcake.org>
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType MassUpdateScript
 */

import {EntryPoints} from 'N/types';
import {getCurrentScript} from "N/runtime";
import * as record from 'N/record';
import * as log from 'N/log';

export let each: EntryPoints.MassUpdate.each = (params: EntryPoints.MassUpdate.eachContext) => {
    try {

        //Get halt switch
        const script = getCurrentScript();
        const halt = script.getParameter({name: "custscript_mass_delete_halt"});

        if (!halt) {
            record.delete(params);
            log.audit("Deleted", params);
        }
    }
    catch (e) {
        log.error("each", e);
    }
};
