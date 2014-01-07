class Foundation5 < Locomotive::Wagon::Generators::Site::Base
  def self.source_root
    File.join(File.dirname(__FILE__), 'foundation5')
  end
end

Locomotive::Wagon::Generators::Site.register(:foundation5, Foundation5, %{
  A LocomotiveCMS site powered by Foundation (v5.0.2)
})
