// Allow unused imports while developing
#![allow(unused_imports, dead_code)]

use crate::compiler::SinglepassCompiler;
use std::sync::Arc;
use wasmer_compiler::{Compiler, CompilerConfig, CpuFeature, FunctionMiddlewareGenerator, Target};

#[derive(Clone)]
pub struct SinglepassConfig {
    pub(crate) enable_nan_canonicalization: bool,
    pub(crate) enable_stack_check: bool,
    /// The middleware chain.
    pub(crate) middlewares: Vec<Arc<dyn FunctionMiddlewareGenerator>>,
}

impl SinglepassConfig {
    /// Creates a new configuration object with the default configuration
    /// specified.
    pub fn new() -> Self {
        Self {
            enable_nan_canonicalization: true,
            enable_stack_check: false,
            middlewares: vec![],
        }
    }

    /// Enable stack check.
    ///
    /// When enabled, an explicit stack depth check will be performed on entry
    /// to each function to prevent stack overflow.
    ///
    /// Note that this doesn't guarantee deterministic execution across
    /// different platforms.
    pub fn enable_stack_check(&mut self, enable: bool) -> &mut Self {
        self.enable_stack_check = enable;
        self
    }

    /// Enable NaN canonicalization.
    ///
    /// NaN canonicalization is useful when trying to run WebAssembly
    /// deterministically across different architectures.
    pub fn canonicalize_nans(&mut self, enable: bool) -> &mut Self {
        self.enable_nan_canonicalization = enable;
        self
    }
}

impl CompilerConfig for SinglepassConfig {
    fn enable_pic(&mut self) {
        // Do nothing, since singlepass already emits
        // PIC code.
    }

    /// Transform it into the compiler
    fn compiler(&self) -> Box<dyn Compiler + Send> {
        Box::new(SinglepassCompiler::new(&self))
    }

    /// Pushes a middleware onto the back of the middleware chain.
    fn push_middleware(&mut self, middleware: Arc<dyn FunctionMiddlewareGenerator>) {
        self.middlewares.push(middleware);
    }
}

impl Default for SinglepassConfig {
    fn default() -> SinglepassConfig {
        Self::new()
    }
}
