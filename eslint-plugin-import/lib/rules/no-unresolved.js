'use strict';

var _resolve = require('eslint-module-utils/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _ModuleCache = require('eslint-module-utils/ModuleCache');

var _ModuleCache2 = _interopRequireDefault(_ModuleCache);

var _moduleVisitor = require('eslint-module-utils/moduleVisitor');

var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  meta: {
    schema: [(0, _moduleVisitor.makeOptionsSchema)({
      caseSensitive: { type: 'boolean', default: true }
    })]
  },

  create: function (context) {

    function checkSourceValue(source) {
      const shouldCheckCase = !_resolve.CASE_SENSITIVE_FS && (!context.options[0] || context.options[0].caseSensitive !== false);

      const resolvedPath = (0, _resolve2.default)(source.value, context);

      if (resolvedPath === undefined) {
        context.report(source, `Unable to resolve path to module '${ source.value }'.`);
      } else if (shouldCheckCase) {
        const cacheSettings = _ModuleCache2.default.getSettings(context.settings);
        if (!(0, _resolve.fileExistsWithCaseSync)(resolvedPath, cacheSettings)) {
          context.report(source, `Casing of ${ source.value } does not match the underlying filesystem.`);
        }
      }
    }

    return (0, _moduleVisitor2.default)(checkSourceValue, context.options[0]);
  }
}; /**
    * @fileOverview Ensures that an imported path exists, given resolution rules.
    * @author Ben Mosher
    */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLXVucmVzb2x2ZWQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJzY2hlbWEiLCJjYXNlU2Vuc2l0aXZlIiwidHlwZSIsImRlZmF1bHQiLCJjcmVhdGUiLCJjb250ZXh0IiwiY2hlY2tTb3VyY2VWYWx1ZSIsInNvdXJjZSIsInNob3VsZENoZWNrQ2FzZSIsIm9wdGlvbnMiLCJyZXNvbHZlZFBhdGgiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInJlcG9ydCIsImNhY2hlU2V0dGluZ3MiLCJnZXRTZXR0aW5ncyIsInNldHRpbmdzIl0sIm1hcHBpbmdzIjoiOztBQUtBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxZQUFRLENBQUUsc0NBQWtCO0FBQzFCQyxxQkFBZSxFQUFFQyxNQUFNLFNBQVIsRUFBbUJDLFNBQVMsSUFBNUI7QUFEVyxLQUFsQixDQUFGO0FBREosR0FEUzs7QUFPZkMsVUFBUSxVQUFVQyxPQUFWLEVBQW1COztBQUV6QixhQUFTQyxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBa0M7QUFDaEMsWUFBTUMsa0JBQWtCLGdDQUNyQixDQUFDSCxRQUFRSSxPQUFSLENBQWdCLENBQWhCLENBQUQsSUFBdUJKLFFBQVFJLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJSLGFBQW5CLEtBQXFDLEtBRHZDLENBQXhCOztBQUdBLFlBQU1TLGVBQWUsdUJBQVFILE9BQU9JLEtBQWYsRUFBc0JOLE9BQXRCLENBQXJCOztBQUVBLFVBQUlLLGlCQUFpQkUsU0FBckIsRUFBZ0M7QUFDOUJQLGdCQUFRUSxNQUFSLENBQWVOLE1BQWYsRUFDRyxzQ0FBb0NBLE9BQU9JLEtBQU0sS0FEcEQ7QUFFRCxPQUhELE1BS0ssSUFBSUgsZUFBSixFQUFxQjtBQUN4QixjQUFNTSxnQkFBZ0Isc0JBQVlDLFdBQVosQ0FBd0JWLFFBQVFXLFFBQWhDLENBQXRCO0FBQ0EsWUFBSSxDQUFDLHFDQUF1Qk4sWUFBdkIsRUFBcUNJLGFBQXJDLENBQUwsRUFBMEQ7QUFDeERULGtCQUFRUSxNQUFSLENBQWVOLE1BQWYsRUFDRyxjQUFZQSxPQUFPSSxLQUFNLDZDQUQ1QjtBQUVEO0FBRUY7QUFDRjs7QUFFRCxXQUFPLDZCQUFjTCxnQkFBZCxFQUFnQ0QsUUFBUUksT0FBUixDQUFnQixDQUFoQixDQUFoQyxDQUFQO0FBRUQ7QUFoQ2MsQ0FBakIsQyxDQVhBIiwiZmlsZSI6InJ1bGVzL25vLXVucmVzb2x2ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgRW5zdXJlcyB0aGF0IGFuIGltcG9ydGVkIHBhdGggZXhpc3RzLCBnaXZlbiByZXNvbHV0aW9uIHJ1bGVzLlxuICogQGF1dGhvciBCZW4gTW9zaGVyXG4gKi9cblxuaW1wb3J0IHJlc29sdmUsIHsgQ0FTRV9TRU5TSVRJVkVfRlMsIGZpbGVFeGlzdHNXaXRoQ2FzZVN5bmMgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3Jlc29sdmUnXG5pbXBvcnQgTW9kdWxlQ2FjaGUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9Nb2R1bGVDYWNoZSdcbmltcG9ydCBtb2R1bGVWaXNpdG9yLCB7IG1ha2VPcHRpb25zU2NoZW1hIH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9tb2R1bGVWaXNpdG9yJ1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICBzY2hlbWE6IFsgbWFrZU9wdGlvbnNTY2hlbWEoe1xuICAgICAgY2FzZVNlbnNpdGl2ZTogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IHRydWUgfSxcbiAgICB9KV0sXG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbiAoY29udGV4dCkge1xuXG4gICAgZnVuY3Rpb24gY2hlY2tTb3VyY2VWYWx1ZShzb3VyY2UpIHtcbiAgICAgIGNvbnN0IHNob3VsZENoZWNrQ2FzZSA9ICFDQVNFX1NFTlNJVElWRV9GUyAmJlxuICAgICAgICAoIWNvbnRleHQub3B0aW9uc1swXSB8fCBjb250ZXh0Lm9wdGlvbnNbMF0uY2FzZVNlbnNpdGl2ZSAhPT0gZmFsc2UpXG5cbiAgICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IHJlc29sdmUoc291cmNlLnZhbHVlLCBjb250ZXh0KVxuXG4gICAgICBpZiAocmVzb2x2ZWRQYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5yZXBvcnQoc291cmNlLFxuICAgICAgICAgIGBVbmFibGUgdG8gcmVzb2x2ZSBwYXRoIHRvIG1vZHVsZSAnJHtzb3VyY2UudmFsdWV9Jy5gKVxuICAgICAgfVxuXG4gICAgICBlbHNlIGlmIChzaG91bGRDaGVja0Nhc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVTZXR0aW5ncyA9IE1vZHVsZUNhY2hlLmdldFNldHRpbmdzKGNvbnRleHQuc2V0dGluZ3MpXG4gICAgICAgIGlmICghZmlsZUV4aXN0c1dpdGhDYXNlU3luYyhyZXNvbHZlZFBhdGgsIGNhY2hlU2V0dGluZ3MpKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoc291cmNlLFxuICAgICAgICAgICAgYENhc2luZyBvZiAke3NvdXJjZS52YWx1ZX0gZG9lcyBub3QgbWF0Y2ggdGhlIHVuZGVybHlpbmcgZmlsZXN5c3RlbS5gKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlVmlzaXRvcihjaGVja1NvdXJjZVZhbHVlLCBjb250ZXh0Lm9wdGlvbnNbMF0pXG5cbiAgfSxcbn1cblxuIl19