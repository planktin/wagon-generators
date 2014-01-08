class Foundation5 < Locomotive::Wagon::Generators::Site::Base
  def self.source_root
    File.join(File.dirname(__FILE__), 'foundation5')
  end
end

Locomotive::Wagon::Generators::Site.register(:foundation5, Foundation5, %{
  A LocomotiveCMS site powered by Foundation (v5.0.2)
})


class FoundationLibsass < Locomotive::Wagon::Generators::Site::Base
  def self.source_root
    File.join(File.dirname(__FILE__), 'foundation_libsass')
  end
end

Locomotive::Wagon::Generators::Site.register(:foundation_libsass, FoundationLibsass, %{
  A LocomotiveCMS site powered by Foundation, Libsass and Grunt
})
