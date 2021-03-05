(function() {var implementors = {};
implementors["wasmer"] = [{"text":"impl From&lt;ExportError&gt; for HostEnvInitError","synthetic":false,"types":[]},{"text":"impl From&lt;Function&gt; for Extern","synthetic":false,"types":[]},{"text":"impl From&lt;Global&gt; for Extern","synthetic":false,"types":[]},{"text":"impl From&lt;Memory&gt; for Extern","synthetic":false,"types":[]},{"text":"impl From&lt;Table&gt; for Extern","synthetic":false,"types":[]},{"text":"impl From&lt;InstantiationError&gt; for InstantiationError","synthetic":false,"types":[]},{"text":"impl From&lt;HostEnvInitError&gt; for InstantiationError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for IoCompileError","synthetic":false,"types":[]},{"text":"impl From&lt;CompileError&gt; for IoCompileError","synthetic":false,"types":[]},{"text":"impl&lt;Args, Rets, '_&gt; From&lt;&amp;'_ NativeFunc&lt;Args, Rets&gt;&gt; for ExportFunction <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: WasmTypeList,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rets: WasmTypeList,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Args, Rets&gt; From&lt;NativeFunc&lt;Args, Rets&gt;&gt; for Function <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: WasmTypeList,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rets: WasmTypeList,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl From&lt;Function&gt; for Val","synthetic":false,"types":[]}];
implementors["wasmer_c_api"] = [{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ImportType&lt;ExternType&gt;&gt; for wasmer_import_export_kind","synthetic":false,"types":[]},{"text":"impl From&lt;ImportType&lt;ExternType&gt;&gt; for wasmer_import_export_kind","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ExportType&lt;ExternType&gt;&gt; for wasmer_import_export_kind","synthetic":false,"types":[]},{"text":"impl From&lt;ExportType&lt;ExternType&gt;&gt; for wasmer_import_export_kind","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ExternType&gt; for wasmer_import_export_kind","synthetic":false,"types":[]},{"text":"impl From&lt;ExternType&gt; for wasmer_import_export_kind","synthetic":false,"types":[]},{"text":"impl From&lt;u8&gt; for Version","synthetic":false,"types":[]},{"text":"impl From&lt;wasmer_value_t&gt; for Val","synthetic":false,"types":[]},{"text":"impl From&lt;Value&lt;Function&gt;&gt; for wasmer_value_t","synthetic":false,"types":[]},{"text":"impl From&lt;Type&gt; for wasmer_value_tag","synthetic":false,"types":[]},{"text":"impl From&lt;wasmer_value_tag&gt; for ValType","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ Type&gt; for wasmer_value_tag","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_extern_t, Global&gt;&gt;&gt; for wasm_extern_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_extern_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_extern_vec_t","synthetic":false,"types":[]},{"text":"impl From&lt;RuntimeError&gt; for wasm_trap_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_exporttype_t, Global&gt;&gt;&gt; for wasm_exporttype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_exporttype_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_exporttype_vec_t","synthetic":false,"types":[]},{"text":"impl From&lt;ExportType&lt;ExternType&gt;&gt; for wasm_exporttype_t","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ExportType&lt;ExternType&gt;&gt; for wasm_exporttype_t","synthetic":false,"types":[]},{"text":"impl From&lt;ExternType&gt; for wasm_externkind_enum","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ExternType&gt; for wasm_externkind_enum","synthetic":false,"types":[]},{"text":"impl From&lt;ExternType&gt; for wasm_externtype_t","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ExternType&gt; for wasm_externtype_t","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'static str&gt; for ExternTypeConversionError","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a FrameInfo&gt; for wasm_frame_t","synthetic":false,"types":[]},{"text":"impl From&lt;FrameInfo&gt; for wasm_frame_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_frame_t, Global&gt;&gt;&gt; for wasm_frame_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_frame_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_frame_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_functype_t, Global&gt;&gt;&gt; for wasm_functype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_functype_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_functype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_globaltype_t, Global&gt;&gt;&gt; for wasm_globaltype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_globaltype_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_globaltype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_importtype_t, Global&gt;&gt;&gt; for wasm_importtype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_importtype_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_importtype_vec_t","synthetic":false,"types":[]},{"text":"impl From&lt;ImportType&lt;ExternType&gt;&gt; for wasm_importtype_t","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ ImportType&lt;ExternType&gt;&gt; for wasm_importtype_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_memorytype_t, Global&gt;&gt;&gt; for wasm_memorytype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_memorytype_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_memorytype_vec_t","synthetic":false,"types":[]},{"text":"impl From&lt;wasm_mutability_enum&gt; for wasm_mutability_t","synthetic":false,"types":[]},{"text":"impl From&lt;wasm_mutability_enum&gt; for Mutability","synthetic":false,"types":[]},{"text":"impl From&lt;Mutability&gt; for wasm_mutability_enum","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_tabletype_t, Global&gt;&gt;&gt; for wasm_tabletype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_tabletype_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_tabletype_vec_t","synthetic":false,"types":[]},{"text":"impl From&lt;Type&gt; for wasm_valkind_enum","synthetic":false,"types":[]},{"text":"impl From&lt;wasm_valkind_enum&gt; for ValType","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasm_valtype_t, Global&gt;&gt;&gt; for wasm_valtype_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_valtype_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_valtype_vec_t","synthetic":false,"types":[]},{"text":"impl From&lt;wasm_valtype_t&gt; for ValType","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ wasm_valtype_t&gt; for ValType","synthetic":false,"types":[]},{"text":"impl From&lt;Type&gt; for wasm_valtype_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;u8&gt;&gt; for wasm_byte_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_byte_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_byte_vec_t","synthetic":false,"types":[]},{"text":"impl From&lt;String&gt; for wasm_name_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, '_&gt; From&lt;&amp;'_ Operator&lt;'a&gt;&gt; for wasmer_parser_operator_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Box&lt;wasmer_named_extern_t, Global&gt;&gt;&gt; for wasmer_named_extern_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasmer_named_extern_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasmer_named_extern_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;wasm_val_t&gt;&gt; for wasm_val_vec_t","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Into&lt;wasm_val_t&gt; + Clone&gt; From&lt;&amp;'a [T]&gt; for wasm_val_vec_t","synthetic":false,"types":[]},{"text":"impl From&lt;WasiVersion&gt; for wasi_version_t","synthetic":false,"types":[]}];
implementors["wasmer_compiler"] = [{"text":"impl&lt;T&gt; From&lt;T&gt; for Box&lt;dyn CompilerConfig + 'static&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: CompilerConfig + 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl From&lt;WasmError&gt; for CompileError","synthetic":false,"types":[]},{"text":"impl From&lt;MiddlewareError&gt; for WasmError","synthetic":false,"types":[]},{"text":"impl From&lt;BinaryReaderError&gt; for WasmError","synthetic":false,"types":[]},{"text":"impl From&lt;BinaryReaderError&gt; for CompileError","synthetic":false,"types":[]}];
implementors["wasmer_engine"] = [{"text":"impl From&lt;Error&gt; for SerializeError","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for DeserializeError","synthetic":false,"types":[]},{"text":"impl From&lt;Export&gt; for VMExport","synthetic":false,"types":[]},{"text":"impl From&lt;VMExport&gt; for Export","synthetic":false,"types":[]},{"text":"impl From&lt;ExportFunction&gt; for Export","synthetic":false,"types":[]},{"text":"impl From&lt;ExportTable&gt; for Export","synthetic":false,"types":[]},{"text":"impl From&lt;ExportMemory&gt; for Export","synthetic":false,"types":[]},{"text":"impl From&lt;ExportGlobal&gt; for Export","synthetic":false,"types":[]},{"text":"impl From&lt;Trap&gt; for RuntimeError","synthetic":false,"types":[]}];
implementors["wasmer_object"] = [{"text":"impl From&lt;Error&gt; for ObjectError","synthetic":false,"types":[]}];
implementors["wasmer_vm"] = [{"text":"impl From&lt;VMExportFunction&gt; for VMExport","synthetic":false,"types":[]},{"text":"impl From&lt;VMExportTable&gt; for VMExport","synthetic":false,"types":[]},{"text":"impl From&lt;VMExportMemory&gt; for VMExport","synthetic":false,"types":[]},{"text":"impl From&lt;VMExportGlobal&gt; for VMExport","synthetic":false,"types":[]}];
implementors["wasmer_wasi"] = [{"text":"impl&lt;T:&nbsp;Copy, Ty&gt; From&lt;i32&gt; for WasmPtr&lt;T, Ty&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for WasiFsError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()