(function() {
  var escope, esprima, expect, harmony;

  expect = require('chai').expect;

  esprima = require('esprima');

  harmony = require('../third_party/esprima');

  escope = require('..');

  describe('global increment', function() {
    return it('becomes read/write', function() {
      var ast, globalScope, scopeManager;
      ast = esprima.parse("b++;");
      scopeManager = escope.analyze(ast);
      expect(scopeManager.scopes).to.have.length(1);
      globalScope = scopeManager.scopes[0];
      expect(globalScope.type).to.be.equal('global');
      expect(globalScope.variables).to.have.length(0);
      expect(globalScope.references).to.have.length(1);
      return expect(globalScope.references[0].isReadWrite()).to.be["true"];
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1pbmNyZW1lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQTtBQUFBLE1BQUEsZ0NBQUE7O0FBQUEsRUFBQSxNQUFBLEdBQVMsT0FBQSxDQUFTLE1BQVQsQ0FBZSxDQUFDLE1BQXpCLENBQUE7O0FBQUEsRUFDQSxPQUFBLEdBQVUsT0FBQSxDQUFTLFNBQVQsQ0FEVixDQUFBOztBQUFBLEVBRUEsT0FBQSxHQUFVLE9BQUEsQ0FBUyx3QkFBVCxDQUZWLENBQUE7O0FBQUEsRUFHQSxNQUFBLEdBQVMsT0FBQSxDQUFTLElBQVQsQ0FIVCxDQUFBOztBQUFBLEVBS0EsUUFBQSxDQUFVLGtCQUFWLEVBQTZCLFNBQUEsR0FBQTtXQUN6QixFQUFBLENBQUksb0JBQUosRUFBeUIsU0FBQSxHQUFBO0FBQ3JCLFVBQUEsOEJBQUE7QUFBQSxNQUFBLEdBQUEsR0FBTSxPQUFPLENBQUMsS0FBUixDQUFpQixNQUFqQixDQUFOLENBQUE7QUFBQSxNQUlBLFlBQUEsR0FBZSxNQUFNLENBQUMsT0FBUCxDQUFlLEdBQWYsQ0FKZixDQUFBO0FBQUEsTUFLQSxNQUFBLENBQU8sWUFBWSxDQUFDLE1BQXBCLENBQTJCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFwQyxDQUEyQyxDQUEzQyxDQUxBLENBQUE7QUFBQSxNQU1BLFdBQUEsR0FBYyxZQUFZLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FObEMsQ0FBQTtBQUFBLE1BT0EsTUFBQSxDQUFPLFdBQVcsQ0FBQyxJQUFuQixDQUF3QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBL0IsQ0FBc0MsUUFBdEMsQ0FQQSxDQUFBO0FBQUEsTUFRQSxNQUFBLENBQU8sV0FBVyxDQUFDLFNBQW5CLENBQTZCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUF0QyxDQUE2QyxDQUE3QyxDQVJBLENBQUE7QUFBQSxNQVNBLE1BQUEsQ0FBTyxXQUFXLENBQUMsVUFBbkIsQ0FBOEIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQXZDLENBQThDLENBQTlDLENBVEEsQ0FBQTthQVVBLE1BQUEsQ0FBTyxXQUFXLENBQUMsVUFBVyxDQUFBLENBQUEsQ0FBRSxDQUFDLFdBQTFCLENBQUEsQ0FBUCxDQUErQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBRCxFQVhoQztJQUFBLENBQXpCLEVBRHlCO0VBQUEsQ0FBN0IsQ0FMQSxDQUFBO0FBQUEiLCJmaWxlIjoiZ2xvYmFsLWluY3JlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMgLSotIGNvZGluZzogdXRmLTggLSotXG4jICBDb3B5cmlnaHQgKEMpIDIwMTUgWXVzdWtlIFN1enVraSA8dXRhdGFuZS50ZWFAZ21haWwuY29tPlxuI1xuIyAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4jICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiNcbiMgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuIyAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiMgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuIyAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbiMgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuI1xuIyAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiMgIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiMgIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4jICBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgPENPUFlSSUdIVCBIT0xERVI+IEJFIExJQUJMRSBGT1IgQU5ZXG4jICBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuIyAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuIyAgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EXG4jICBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuIyAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4jICBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5leHBlY3QgPSByZXF1aXJlKCdjaGFpJykuZXhwZWN0XG5lc3ByaW1hID0gcmVxdWlyZSAnZXNwcmltYSdcbmhhcm1vbnkgPSByZXF1aXJlICcuLi90aGlyZF9wYXJ0eS9lc3ByaW1hJ1xuZXNjb3BlID0gcmVxdWlyZSAnLi4nXG5cbmRlc2NyaWJlICdnbG9iYWwgaW5jcmVtZW50JywgLT5cbiAgICBpdCAnYmVjb21lcyByZWFkL3dyaXRlJywgLT5cbiAgICAgICAgYXN0ID0gZXNwcmltYS5wYXJzZSBcIlwiXCJcbiAgICAgICAgYisrO1xuICAgICAgICBcIlwiXCJcblxuICAgICAgICBzY29wZU1hbmFnZXIgPSBlc2NvcGUuYW5hbHl6ZSBhc3RcbiAgICAgICAgZXhwZWN0KHNjb3BlTWFuYWdlci5zY29wZXMpLnRvLmhhdmUubGVuZ3RoIDFcbiAgICAgICAgZ2xvYmFsU2NvcGUgPSBzY29wZU1hbmFnZXIuc2NvcGVzWzBdXG4gICAgICAgIGV4cGVjdChnbG9iYWxTY29wZS50eXBlKS50by5iZS5lcXVhbCAnZ2xvYmFsJ1xuICAgICAgICBleHBlY3QoZ2xvYmFsU2NvcGUudmFyaWFibGVzKS50by5oYXZlLmxlbmd0aCAwXG4gICAgICAgIGV4cGVjdChnbG9iYWxTY29wZS5yZWZlcmVuY2VzKS50by5oYXZlLmxlbmd0aCAxXG4gICAgICAgIGV4cGVjdChnbG9iYWxTY29wZS5yZWZlcmVuY2VzWzBdLmlzUmVhZFdyaXRlKCkpLnRvLmJlLnRydWVcblxuIyB2aW06IHNldCBzdz00IHRzPTQgZXQgdHc9ODAgOlxuIl19