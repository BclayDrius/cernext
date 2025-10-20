import { supabase } from "./supabase.js";

// Función para probar la conexión con Supabase
export async function testSupabaseConnection() {
  try {
    console.log("🔍 Probando conexión con Supabase...");

    // Test 1: Verificar que el cliente se creó correctamente
    console.log("✅ Cliente Supabase creado");
    console.log("📍 URL:", supabase.supabaseUrl);

    // Test 2: Probar una consulta simple
    const { data, error, count } = await supabase
      .from("contacts")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("❌ Error en consulta:", error);
      return { success: false, error: error.message };
    }

    console.log("✅ Consulta exitosa");
    console.log("📊 Registros en tabla:", count);

    return { success: true, count };
  } catch (err) {
    console.error("❌ Error de conexión:", err);
    return { success: false, error: err.message };
  }
}

// Función para probar inserción
export async function testSupabaseInsert() {
  try {
    console.log("🔍 Probando inserción en Supabase...");

    const testData = {
      name: "Test Usuario",
      email: "test@cernext.com",
      subject: "Test de Conexión",
      message:
        "Este es un mensaje de prueba para verificar la conexión con Supabase.",
    };

    const { data, error } = await supabase.from("contacts").insert(testData);

    if (error) {
      console.error("❌ Error en inserción:", error);
      return { success: false, error: error.message };
    }

    console.log("✅ Inserción exitosa:", data);
    return { success: true, data };
  } catch (err) {
    console.error("❌ Error en inserción:", err);
    return { success: false, error: err.message };
  }
}
