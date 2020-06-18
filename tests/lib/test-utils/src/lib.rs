#![cfg(feature = "compiler")]

use std::sync::Arc;
use wasmer::{Store, Tunables};
use wasmer_compiler::{CompilerConfig, Features, Target};
use wasmer_engine_jit::JITEngine;

pub fn get_compiler_config_from_str(
    compiler_name: &str,
    do_nan_canonicalization: bool,
) -> Box<dyn CompilerConfig> {
    match compiler_name {
        #[cfg(feature = "singlepass")]
        "singlepass" => {
            let mut singlepass_config = wasmer_compiler_singlepass::SinglepassConfig::new();
            singlepass_config.canonicalize_nans(do_nan_canonicalization);
            Box::new(singlepass_config)
        }
        #[cfg(feature = "cranelift")]
        "cranelift" => {
            let mut cranelift_config = wasmer_compiler_cranelift::CraneliftConfig::new();
            cranelift_config.canonicalize_nans(do_nan_canonicalization);
            Box::new(cranelift_config)
        }
        #[cfg(feature = "llvm")]
        "llvm" => {
            let mut llvm_config = wasmer_compiler_llvm::LLVMConfig::new();
            llvm_config.canonicalize_nans(do_nan_canonicalization);
            Box::new(llvm_config)
        }
        _ => panic!("Compiler {} not supported", compiler_name),
    }
}

/// for when you need a store but you don't care about the details
pub fn get_default_store() -> Store {
    let target = Target::default();
    let compiler_config = get_compiler_config_from_str("cranelift", false);
    let tunables = Tunables::for_target(target);
    Store::new(&JITEngine::new(
        compiler_config,
        tunables,
        Features::default(),
    ))
}

#[cfg(feature = "llvm")]
pub fn get_default_llvm_store() -> Store {
    let target = Target::default();
    let compiler_config = get_compiler_config_from_str("llvm", false);
    let tunables = Tunables::for_target(target);
    Store::new(&JITEngine::new(
        compiler_config,
        tunables,
        Features::default(),
    ))
}

#[cfg(feature = "cranelift")]
pub fn get_default_cranelift_store() -> Store {
    let target = Target::default();
    let compiler_config = get_compiler_config_from_str("cranelift", false);
    let tunables = Tunables::for_target(target);
    Store::new(&JITEngine::new(
        compiler_config,
        tunables,
        Features::default(),
    ))
}

#[cfg(feature = "singlepass")]
pub fn get_default_singlepass_store() -> Store {
    let target = Target::default();
    let mut features = Features::default();
    features.multi_value(false);
    let compiler_config = get_compiler_config_from_str("singlepass", false);
    let tunables = Tunables::for_target(target);
    Store::new(&JITEngine::new(compiler_config, tunables, features))
}
